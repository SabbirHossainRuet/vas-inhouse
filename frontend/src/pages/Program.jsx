import { useContext, useEffect, useState } from "react"
import { ProgramContext } from "../context/ProgramContext"
import ProgramItem from "../components/ProgramItem";

const Program = () => {

  const { programs } = useContext(ProgramContext);
  const [filterPrograms, setFilterPrograms] = useState([]);
  useEffect(() => {
    setFilterPrograms(programs);
  }, [])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Option */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS</p>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <p>ALL Programs</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mr-40">
          {
            filterPrograms.map((item, index) => (
              <div className="border-2 p-2 pl-6">
                <ProgramItem key={index} code={item.code} server={item.server} db_name={item.db_name} programmer={item.programmer} p_status={item.p_status} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Program