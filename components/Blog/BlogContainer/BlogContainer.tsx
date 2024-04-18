import styles from './BlogContainer.module.scss'

export default function BlogContainer({ children }) {
  return (
    
    <div className="container mx-auto">
      <div className={styles.WrapperBlCont}>
        {children}
      </div>
    </div>
  )
}
