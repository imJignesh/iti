const fs = require('fs');

const fileContent = fs.readFileSync('src/pages/category/[category-slug].js', 'utf8');

let newContent = fileContent.replace(
`const CategoryPage = ({ headerHeight }) => {
    const router = useRouter();
    const { 'category-slug': categorySlug } = router.query;

    // --- State & Hooks ---
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [tagsMap, setTagsMap] = useState({});
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const [currentCategory, setCurrentCategory] = useState(null);

    // 1. Fetch the category object (and ID) based on the slug
    const categoryApiUrl = categorySlug
        ? \`/api/wp/categories?slug=\${categorySlug}\`
        : null;

    const { data: categoryData, error: categoryError } = useSWR(categoryApiUrl, categoryFetcher);

    // Update the currentCategory state once the data is fetched
    useEffect(() => {
        if (categoryData && categoryData.length > 0) {
            setCurrentCategory(categoryData[0]);
            // Reset posts and page when the category slug changes
            setPosts([]);
            setPage(1);
            setHasMore(true);
        } else if (categorySlug && categoryData && categoryData.length === 0) {
            // Handle 404 for category not found
            // router.push('/404'); // You might want to redirect to a 404 page
        }
    }, [categoryData, categorySlug]);`,

`export async function getServerSideProps(context) {
    const { params } = context;
    const categorySlug = params['category-slug'];

    try {
        const categoryRes = await fetch(\`https://api.ignitetraininginstitute.com/wp-json/wp/v2/categories?slug=\${categorySlug}\`);
        const categoryData = await categoryRes.json();

        if (!Array.isArray(categoryData) || categoryData.length === 0) {
            return { notFound: true };
        }

        const currentCategory = categoryData[0];
        const categoryId = currentCategory.id;

        // Fetch Posts initially
        const postsRes = await fetch(\`https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=9&page=1&_embed&categories=\${categoryId}\`);
        let initialPosts = [];
        let totalPages = 1;

        if (postsRes.ok) {
            initialPosts = await postsRes.json();
            totalPages = parseInt(postsRes.headers.get('X-WP-TotalPages'), 10) || 1;
        }

        // Fetch tags natively (can be optimized later)
        const tagsRes = await fetch('https://api.ignitetraininginstitute.com/wp-json/wp/v2/tags?per_page=100');
        const tags = await tagsRes.json();
        const tagsMapFallback = {};
        if (Array.isArray(tags)) {
            tags.forEach(tag => (tagsMapFallback[tag.id] = tag.name));
        }

        return {
            props: {
                fallbackCategory: currentCategory,
                categorySlug,
                initialPosts,
                initialTotalPages: totalPages,
                tagsMapFallback
            }
        };
    } catch (err) {
        return { notFound: true };
    }
}

const CategoryPage = ({ headerHeight, fallbackCategory, categorySlug, initialPosts, initialTotalPages, tagsMapFallback }) => {
    const router = useRouter();

    // --- State & Hooks ---
    const [posts, setPosts] = useState(initialPosts || []);
    const [page, setPage] = useState(1);
    const [tagsMap, setTagsMap] = useState(tagsMapFallback || {});
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [hasMore, setHasMore] = useState((initialTotalPages || 1) > 1);
    
    // Using server-provided category
    const currentCategory = fallbackCategory;
    const categoryError = null;

    useEffect(() => {
        // Hydrate when category slug changes via client navigation
        setPosts(initialPosts || []);
        setPage(1);
        setHasMore((initialTotalPages || 1) > 1);
        setSearchTerm('');
    }, [categorySlug, initialPosts, initialTotalPages]);`
);


// Ensure to ignore SWR data effect override on first load
newContent = newContent.replace(
`    // Effect to accumulate posts (copied from blog.js)
    useEffect(() => {
        if (data && data.data) {
            if (page === 1) {
                setPosts(data.data);
            } else {
                setPosts(prevPosts => [...prevPosts, ...data.data]);
            }
            setHasMore(page < data.totalPages);
        }
    }, [data, page]);`,

`    // Effect to accumulate posts (copied from blog.js)
    useEffect(() => {
        if (data && data.data) {
            // Check if page === 1 and no search: data is already initialPosts
            if (page === 1 && !debouncedSearchTerm) {
                 // We already have initialPosts, but update SWR cache if divergent
                 setPosts(data.data);
            } else if (page === 1) {
                 // When search term changes
                 setPosts(data.data);
            } else {
                setPosts(prevPosts => {
                    // prevent duplicating data on react strict mode
                    const newItems = data.data.filter(d => !prevPosts.find(p => p.id === d.id));
                    return [...prevPosts, ...newItems];
                });
            }
            setHasMore(page < data.totalPages);
        }
    }, [data]); // Depend on data only to append properly, page is implicitly correct in data`
);

fs.writeFileSync('src/pages/category/[category-slug].js', newContent);
