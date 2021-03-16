export default function DetailPilss ({name, color}) {
  return (
    <div className="inline-flex pb-3">
      <span className={`rounded-full items-center uppercase py-1 pr-2.5 text-sm font-medium bg-${color}-100 text-${color}-700 mr-1 pl-2.5`}>
        <div className="inline-flex items-center">
          <p>{name}</p>
        </div>
      </span>
    </div>
  )
}