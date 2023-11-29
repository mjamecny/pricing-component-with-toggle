import { useRef, useState } from "react"

export default function App() {
  const [checked, setChecked] = useState(false)
  const inputEl = useRef(null)

  function handleToggle(e) {
    if (e.code === "Enter") setChecked(!checked)
  }

  return (
    <div className="bg-veryLightGrayishBlue xl:h-screen xl:my-auto">
      <img
        className="absolute top-[0px] right-[0px] z-[10]"
        src="bg-top.svg"
        alt="top pattern"
      />
      <img
        className="absolute bottom-[0px] left-[0px] z-[10]"
        src="bg-bottom.svg"
        alt="bottom pattern"
      />
      <div className="relative mx-auto max-w-6xl px-1.6 py-4.8 xl:h-screen xl:flex xl:flex-col xl:justify-center z-[20]">
        <div className="flex flex-col gap-3.2">
          <h1 className="text-3 text-grayishBlue text-center">Our pricing</h1>
          <form className="flex flex-col gap-0.8">
            <div className="flex gap-1.6 justify-center">
              <p className="text-lightGrayishBlue">Annually</p>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  autoFocus
                  ref={inputEl}
                  onKeyPress={handleToggle}
                />
                <span className="slider round"></span>
              </label>
              <p className="text-lightGrayishBlue">Monthly</p>
            </div>
            <p className="text-1.2 text-center text-lightGrayishBlue">
              Press Enter to change billing
            </p>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2.4 mt-4.8 xl:gap-[0px] xl:min-h-[550px]">
          <div className="bg-[#fff] rounded-lg shadow-md text-darkGrayishBlue p-2.4 xl:max-h-[470px] self-center mb-1.2">
            <div className="flex flex-col gap-2.4 items-center">
              <p className="text-1.6">Basic</p>
              <p className="text-6.2 flex items-center">
                <span className="text-4.4">$</span>
                {checked ? "199.99" : "19.99"}
              </p>
              <ul className="border-t border-lightGrayishBlue flex flex-col self-stretch items-center">
                <li className="py-1.6 self-stretch text-center border-b border-lightGrayishBlue">
                  500 GB Storage
                </li>
                <li className="py-1.6 self-stretch text-center border-b border-lightGrayishBlue">
                  2 Users Allowed
                </li>
                <li className="py-1.6 self-stretch text-center border-b border-lightGrayishBlue">
                  Send up to 3 GB
                </li>
              </ul>

              <button className="uppercase bg-gradient-to-r from-lightPurple hover:from-[#fff] hover:to-[#fff] to-mediumPurple hover:text-mediumPurple border hover:border-mediumPurple text-veryLightGrayishBlue transition-colors duration-300 tracking-widest rounded-md py-1.6 self-stretch">
                Learn more
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-b from-lightPurple to-mediumPurple rounded-lg shadow-md text-veryLightGrayishBlue p-2.4 xl:pt-[55px] xl:min-h-[530px] self-center mb-1.2">
            <div className="flex flex-col gap-2.4 items-center">
              <p className="text-1.6">Professional</p>
              <p className="text-6.2 flex items-center">
                <span className="text-4.4">$</span>
                {checked ? "249.99" : "24.99"}
              </p>
              <ul className="border-t border-lightPurple flex flex-col self-stretch items-center">
                <li className="py-1.6 self-stretch text-center border-b border-lightPurple">
                  1 TB Storage
                </li>
                <li className="py-1.6 self-stretch text-center border-b border-lightPurple">
                  5 Users Allowed
                </li>
                <li className="py-1.6 self-stretch text-center border-b border-lightPurple">
                  Send up to 10 GB
                </li>
              </ul>

              <button className="uppercase bg-veryLightGrayishBlue border hover:bg-mediumPurple hover:text-veryLightGrayishBlue hover:border transition-colors duration-300 text-mediumPurple tracking-widest rounded-md py-1.6 self-stretch">
                Learn more
              </button>
            </div>
          </div>
          <div className="bg-[#fff] rounded-lg shadow-md text-darkGrayishBlue p-2.4 max-h-[470px] self-center mb-1.2">
            <div className="flex flex-col gap-2.4 items-center">
              <p className="text-1.6">Master</p>
              <p className="text-6.2 flex items-center">
                <span className="text-4.4">$</span>
                {checked ? "399.99" : "39.99"}
              </p>
              <ul className="border-t border-lightGrayishBlue flex flex-col self-stretch items-center">
                <li className="py-1.6 self-stretch text-center border-b border-lightGrayishBlue">
                  2 TB Storage
                </li>
                <li className="py-1.6 self-stretch text-center border-b border-lightGrayishBlue">
                  10 Users Allowed
                </li>
                <li className="py-1.6 self-stretch text-center border-b border-lightGrayishBlue">
                  Send up to 20 GB
                </li>
              </ul>

              <button className="uppercase bg-gradient-to-r from-lightPurple hover:from-[#fff] hover:to-[#fff] to-mediumPurple hover:text-mediumPurple border hover:border-mediumPurple text-veryLightGrayishBlue transition-colors duration-300 tracking-widest rounded-md py-1.6 self-stretch">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
