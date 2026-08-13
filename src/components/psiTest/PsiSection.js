import LazySection from "@/components/LazySection";

/**
 * Keeps complete SSR markup while allowing Chromium to defer below-fold
 * rendering work. The intrinsic size prevents unloaded sections collapsing.
 */
export default function PsiSection({ children, intrinsicHeight = 800 }) {
    return (
        <div
            style={{
                contentVisibility: "auto",
                containIntrinsicBlockSize: `${intrinsicHeight}px`,
            }}
        >
            <LazySection>{children}</LazySection>
        </div>
    );
}
