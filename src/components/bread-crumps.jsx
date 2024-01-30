import { useLocation } from "react-router"
import { Link } from "react-router-dom"

const BreadCrumps = () => {
  const location = useLocation()
  const currentLocation = []

  const crumps = location.pathname.split('/')
    .filter(crump => crump != '')

  return (
    <div className="max-w-[1280px] mx-auto px-3">
      <div className="bradCrumps flex gap-1 sm:text-md max-sm:text-[14px]">
        <Link to={'/modellari'} className="after:content-['>']">Bosh sahifa </Link>
        {crumps.map(crump => {
          currentLocation.push(`/${crump}`)
          return (
            <Link to={`${currentLocation.join('')}`} key={crump} className="after:content-['>'] pr-2">{crump}</Link>
          )
        })}
      </div>
    </div>
  )
}

export default BreadCrumps