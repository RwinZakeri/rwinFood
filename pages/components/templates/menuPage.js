import styles from './menuStyle.module.css'
import Card from '../modules/Card';

function MenuPage({data}) {
    console.log(data)
  return (
    <div className={styles.container}>
        <h2>Menu</h2>
        <div className={styles.subContainer}>
            {
                data.map(item => (
                
                    <Card key={item.id} {...item} />

                ))
            }
        </div>
    </div>
  )
}

export default MenuPage

