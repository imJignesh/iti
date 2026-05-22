const r = { source: "/british-curriculum-schools/?utm_source=rss&utm_medium=rss&utm_campaign=british-curriculum-schools" };
const [baseSource, queryStr] = r.source.split('?');
const searchParams = new URLSearchParams(queryStr);
const hasArray = [];
for (const [key, value] of searchParams.entries()) {
    hasArray.push({ type: 'query', key, value });
}
console.log(JSON.stringify({source: baseSource, has: hasArray}, null, 2));
