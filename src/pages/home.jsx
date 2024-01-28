import { useNavigate } from 'react-router'
import chevrolet_model from '../assets/chevrolet-model.png'
import ferarri_model from '../assets/ferarri-model.png'
import lada_model from '../assets/lada-model.png'
import lombarghini_model from '../assets/lombarghini-model.png'

const Home = () => {
  const models = [
    {
      img: chevrolet_model,
      modelName: "chevrolet",
      id: 1,
    },
    {
      img: lada_model,
      modelName: "Lada",
      id: 2,
    },
    {
      img: lombarghini_model,
      modelName: "lamborghini",
      id: 3,
    },
    {
      img: ferarri_model,
      modelName: "ferrari",
      id: 4,
    },]

  const navigate = useNavigate()

  function navigate_to(model) {
    navigate(`/modellari/${model}`)
  }


  return (
    <div className='max-w-[1280px] mx-auto py-6 px-3 mt-6'>
      <h1 className="md:text-5xl sm:text-2xl max-sm:text-xl font-semibold">Modellari</h1>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:items-center gap-5 justify-between mt-12'>
        {models.map(model => (
          <div className='cursor-pointer' key={model.id} onClick={() => navigate_to(model.modelName)}>
            <img src={model.img} alt="models image" />
            <h3 className='xl:text-4xl md:text-3xl sm:text-2xl max-sm:text-xl  font-medium text-center'>{model.modelName}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
