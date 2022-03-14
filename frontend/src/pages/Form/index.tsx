import FormCard from "components/FormCard"
import { useParams } from "react-router-dom"

function Form() {
  const params = useParams()

  return <FormCard movieId={`${params.movieId}`}></FormCard> //usando params para pegar o valor especificado na rota
}
export default Form
