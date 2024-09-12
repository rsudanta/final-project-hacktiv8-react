import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function DashboardSkeleton() {
    return (
        <SkeletonTheme baseColor="#303030" highlightColor="#444">
            <div className="row mt-4">
                <div className="col-lg-8">
                    <Skeleton height={400} />
                </div>
                <div className="col-lg-4">
                    <Skeleton height={400} />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-6 col-md-3 col-lg-2 mt-3">
                    <Skeleton height={300} />
                </div>
                <div className="col-6 col-md-3 col-lg-2 mt-3">
                    <Skeleton height={300} />
                </div>
                <div className="col-6 col-md-3 col-lg-2 mt-3">
                    <Skeleton height={300} />
                </div>
                <div className="col-6 col-md-3 col-lg-2 mt-3">
                    <Skeleton height={300} />
                </div>
                <div className="col-6 col-md-3 col-lg-2 mt-3">
                    <Skeleton height={300} />
                </div>
                <div className="col-6 col-md-3 col-lg-2 mt-3">
                    <Skeleton height={300} />
                </div>
            </div>
        </SkeletonTheme>
    )
}