import Item from './Item'
import BtnStatic from '../shared/BtnStatic'
import Select from 'react-select'

interface Content {
  value: string,
  label: string,
}

const tags: Content[] = [
  { value: 'animation', label: 'Animation' },
  { value: 'tool', label: 'Tool' },
  { value: 'fun', label: 'Fun' },
  { value: 'experimental', label: 'Experiments' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'component', label: 'Component' },
  { value: 'resource', label: 'Resource' },
]

const sort: Content[] = [
  { value: 'recent', label: 'Recent' },
  { value: 'popular', label: 'Popular' },
]

const Intro: React.FC<React.ReactNode> = () => {

  function activeClass(e: any) {
    e.target.classList.toggle('active')
  }

  return <>
    <div className="bg-gray-1000" style={{height: '60vh'}}>
      <div className="container mx-auto px-24 h-full">
        <div className="flex items-center h-full">
          <div className="block mx-auto">
            <h1 className="text-white text-6xl text-center">Visual Jargon</h1>
            <h3 className="text-white text-center text-center mx-3 mt-3 mb-8">A blog about design, tech and new projects</h3>

            <div className="tags">
              {tags.map((tag, i) => {
                return <span onClick={(e) => activeClass(e)} key={i}>{tag.label}</span>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-24 h-full max-w-screen-md py-32">
      <Select
        className="selector sort-posts mb-16"
        options={sort}
        placeholder="Sort Posts"
        id={'1'}
        instanceId={'1'}
        inputId={'1'}
      />

      <Item colour="#456b7c" href="#" />
      <Item colour="#f3164c" href="#" />
      <Item colour="#376dff" href="#" />
      <Item colour="#546a90" href="#" />
      <Item colour="#f7b83d" href="#" />
      <Item colour="#34cef9" href="#" />
      <BtnStatic className="border-solid border border-gray-300
        text-lg w-1/2 text-white clear-both block cursor-pointer
        hover:bg-gray-300 mx-auto mt-10">Load More</BtnStatic>
    </div>
  </>
}

export default Intro