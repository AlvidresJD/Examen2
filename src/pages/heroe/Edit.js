import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const Edit = () => {
    const [ heroe, setHeroe ] = useState('')
    const [ nombre, setNombre ] = useState('')
    const [ edad, setEdad ] = useState(0)
    const [ sexo, setSexo ] = useState('')
    const [ origen, setOrigen ] = useState('')
    const [ cara, setCara ] = useState('')

    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const supers = doc(db, "heroe", id)
        const data = { heroe: heroe, nombre: nombre, edad: edad, sexo: sexo,origen: origen, cara:cara }
        await updateDoc(supers, data)
        navigate('/heroes')
    }

    const getProductById = async (id) => {
        const supers = await getDoc( doc(db, "heroe", id) )
        if(supers.exists()) {
            //console.log(product.data())
            setHeroe(supers.data().heroe)   
            setNombre(supers.data().nombre)   
            setEdad(supers.data().edad)
            setSexo(supers.data().sexo)
            setOrigen(supers.data().origen)
            setCara(supers.data().cara)
        }else{
            console.log('El heroe no existe')
        }
    }

    useEffect( () => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Editar datos de Heroe</h1>
                 <form onSubmit={update}>
                 <div className='mb-3'>
                        <label className='form-label'>Heroe</label>
                        <input
                            value={heroe}
                            onChange={ (e)=> setHeroe(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />                 
                    </div> 
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={nombre}
                            onChange={ (e)=> setNombre(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />                 
                    </div> 
                    <div className='mb-3'>
                        <label className='form-label'>Edad</label>
                        <input
                            value={edad}
                            onChange={ (e)=> setEdad(e.target.value)} 
                            type="number"
                            className='form-control'
                            required
                        />                 
                    </div> 
                    
                    <div className='mb-3'>
              <label className='form-label'>Sexo</label>
              <br />
              <label className='form-label'>Hombre</label>
              <input type="radio" name='sexo' value='Hombre' onChange={(e) => setSexo(e.target.value)} />
              <br />
              <label className='form-label'>Mujer</label>
              <input type="radio" name='sexo' value='Mujer' onChange={(e) => setSexo(e.target.value)} />
              <br />
              <label className='form-label'>No Especificado</label>
              <input type="radio" name='sexo' value='No Especificado' onChange={(e) => setSexo(e.target.value)} />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Origen</label>
              <br />
              <label className='form-label'>Humano</label>
              <input type="radio" name='origen' value='Humano' onChange={(e) => setOrigen(e.target.value)} />
              <br />
              <label className='form-label'>Extraterrestre</label>
              <input type="radio" name='origen' value='Extraterrestre' onChange={(e) => setOrigen(e.target.value)} />
              <br />
              <label className='form-label'>Experimento Cientifico</label>
              <input type="radio" name='origen' value='Experimento Cientifico' onChange={(e) => setOrigen(e.target.value)} />
              <br />
              <label className='form-label'>Mutante</label>
              <input type="radio" name='origen' value='Mutante' onChange={(e) => setOrigen(e.target.value)} />
            </div>
            
            <div className='mb-3'>
              <label className='form-label'>Caracteristicas</label>
              <br />
              <label className='form-label'>Volador</label>
              <input type="checkbox" name='cara' value='Volador' onChange={(e) => setCara(e.target.value)} />
              <br />
              <label className='form-label'>Velocidad</label>
              <input type="checkbox" name='cara' value='Velocidad' onChange={(e) => setCara(e.target.value)} />
              <br />
              <label className='form-label'>Fuerza</label>
              <input type="checkbox" name='cara' value='Fuerza' onChange={(e) => setCara(e.target.value)} />
              <br />
              <label className='form-label'>Visión</label>
              <input type="checkbox" name='cara' value='Vision' onChange={(e) => setCara(e.target.value)} />
              <br />
              <label className='form-label'>Telequinesis</label>
              <input type="checkbox" name='cara' value='Telequinesis' onChange={(e) => setCara(e.target.value)} />
              <br />
        
            </div>
                    <button type='submit' className='btn btn-primary'>Actualizar</button>
                 </form>   
            </div>
        </div>
    </div> 
    )
}

export default Edit