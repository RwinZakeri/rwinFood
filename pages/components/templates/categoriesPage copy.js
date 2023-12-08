import { useEffect, useState } from 'react'
import styles from './CategoriesPage.module.css'
import { useRouter } from 'next/router'
import Card from '../modules/Card'

function Categories({data}) {
    const router = useRouter()
    const [query , setQuery] = useState({
      difficulity : "" ,
      time : "" 
    })

const changeHandler = (e)=> {
  setQuery({...query , [e.target.name] : e.target.value})
}

const clickHandler = ()=> {
    router.push({pathname : "/categories" , query : query })
}


useEffect(()=> {
  const {difficulity , time} = router.query
  if(query.difficulity !== difficulity || query.time !== time){
    setQuery({difficulity , time})
  }
} , [])

console.log(query)
  
  return (
      <div className={styles.container}>
        <h2>Categories</h2>
        <div className={styles.subContainer}>
          <div className={styles.select}>
            <select onChange={changeHandler} value={query.difficulity} name='difficulity'>
              <option value="difficulity">Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
    <div className={styles.select}>
          <select onChange={changeHandler} value={query.time}  name='time'>
              <option value="time">Cooking Time</option>
              <option value="more">More than 30 min</option>
              <option value="less">Less than 30 min</option>
            </select>
            <button onClick={clickHandler}>Search</button>

       

            {
              data.map((item) => (<Card key={item.id} {...item} />))
            }

           
    </div>
        </div>

        {
          !data.length ? <img src='/images/search.png' alt='search image' /> : null
        }
    </div>
  )
}

export default Categories
