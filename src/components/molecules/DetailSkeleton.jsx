import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function DetailSkeleton() {
    return (
        <SkeletonTheme baseColor="#303030" highlightColor="#444">
            <div className="row">
                <div className="col-12 col-md-4">
                    <Skeleton height={600} />
                </div>
                <div className="col-12 col-md-8 mt-3 mt-lg-0">
                    <Skeleton count={3} height={80} />
                </div>
            </div>
        </SkeletonTheme>
    )
}