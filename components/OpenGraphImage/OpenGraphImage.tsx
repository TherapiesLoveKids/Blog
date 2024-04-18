// Renders the Open Graph image used on the home page

export const width = 1200
export const height = 630

import styles from "./OpenGraphImage.module.scss"

export default function OpenGraphImage(props: { title: string }) {
  const { title } = props
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        backgroundImage:
          'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
        backgroundSize: '100px 100px',
        backgroundPosition: '0 -8px, 0 -8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent:'center',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ background: '#fff' , width: '300px', height: '300px' 
        }}
        >
          <g id="Layer_2" className={styles.imgOpenGraph} data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path className={styles.cls1} d="M15.85,20.43a14.28,14.28,0,0,1-1-5.37c0-2.56,1.44-7.13,6.82-7.13a8.46,8.46,0,0,1,6.76,3.35s-.08,2,.43,2,.73-.8,1.28-.81,1.12.84,1.12,1.89c0,.83-.43,1.58-1,1.57-.38,0-1-.65-1.39-.64s-.4.76-.4.76l0,4.28Z"/>
              <path className={styles.cls2} d="M34.39,20.73c0,.38.61.55.61,1.21s-.86,1-1.87,1c-.48,0-1.75-.08-1.75-1,0-.55.73-.65.72-1.21,0-.13-.11-.23-.26-.29H28.56l.09,4s0,.89-.38,1-1.05-.6-1.8-.56-.66,1.11-.66,1.52c0,.88.32,1.77.92,1.79s.78-.78,1.3-.77.62,1.3.62,1.3v.36h0l.18,3.73s6.27-3.88,8.43-6.08a18,18,0,0,0,4.17-6.26l-6.63,0C34.57,20.5,34.39,20.59,34.39,20.73Z"/>
              <path className={styles.cls3} d="M16,20.73l5.53-.22s1-.05,1-.47-.73-.59-.74-1.23.83-1.18,2-1.18,1.63.42,1.62,1.14-.62.77-.6,1.2.85.38.85.38l2.94,0,.09,4.13s0,.89-.38,1-1.05-.6-1.8-.56-.66,1.11-.66,1.52c0,.88.32,1.77.92,1.79s.78-.78,1.3-.77.62,1.3.62,1.3l-.09,3.67S23.32,29.79,20.49,27A20.41,20.41,0,0,1,16,20.73Z"/>
              <path className={styles.cls4} d="M35.63,7.93a7.84,7.84,0,0,0-7,3.51v1.61c.06.14.14.22.24.22.44,0,.74-.8,1.28-.81s1.12.84,1.12,1.89c0,.83-.43,1.58-1,1.57-.38,0-1-.65-1.39-.64a.34.34,0,0,0-.28.17V20.3h2.06c.53,0,1.39.05,1.39.44,0,.56-.72.66-.72,1.21,0,.94,1.27,1,1.75,1,1,0,1.86-.45,1.87-1s-.62-.83-.61-1.21.83-.38,1.12-.38c1.47,0,6,0,6,0a15.6,15.6,0,0,0,.92-5.08C42.38,12.74,40.48,7.93,35.63,7.93Z"/>
              <path className={styles.cls5} d="M1.39,1.44H0V.11H4.37V1.44H3V5.2H1.39Z"/>
              <path className={styles.cls5} d="M9.47.11V5.2H7.88V3.32H6.4V5.2H4.8V.11H6.4V1.92H7.88V.11Z"/>
              <path className={styles.cls5} d="M14.2,3.91V5.2H10.27V.11h3.85v1.3H11.84V2h2V3.24h-2v.67Z"/>
              <path className={styles.cls5} d="M16.87,3.92h-.43V5.2h-1.6V.11h2.28A1.91,1.91,0,0,1,19.28,2a1.71,1.71,0,0,1-.89,1.6l1,1.57h-1.7ZM17,1.44h-.58V2.63H17c.44,0,.65-.23.65-.6S17.46,1.44,17,1.44Z"/>
              <path className={styles.cls5} d="M23.13,4.31h-1.8L21,5.2H19.39L21.46.12H23L25.1,5.2H23.45Zm-.44-1.23L22.23,1.8l-.46,1.28Z"/>
              <path className={styles.cls5} d="M29.82,2A1.91,1.91,0,0,1,27.66,4H27V5.2h-1.6V.12h2.28A1.9,1.9,0,0,1,29.82,2ZM28.21,2c0-.37-.21-.59-.65-.59H27V2.63h.58C28,2.63,28.21,2.4,28.21,2Z"/>
              <path className={styles.cls5} d="M30.36.11H32V5.2h-1.6Z"/>
              <path className={styles.cls5} d="M36.69,3.91V5.2H32.75V.11H36.6v1.3H34.32V2h2V3.24h-2v.67Z"/>
              <path className={styles.cls5} d="M37,4.79l.51-1.25A3,3,0,0,0,39.1,4c.46,0,.62-.1.62-.28,0-.64-2.62-.12-2.62-2C37.1.77,37.84,0,39.31,0a3.61,3.61,0,0,1,1.78.44l-.48,1.24a2.76,2.76,0,0,0-1.32-.37c-.46,0-.61.14-.61.32,0,.61,2.62.1,2.62,2,0,.93-.74,1.72-2.21,1.72A4,4,0,0,1,37,4.79Z"/>
              <path className={styles.cls5} d="M70.84,39l-.4.48v1.41H68.67V35.2h1.77v2.08l1.75-2.08h2L72,37.72l2.24,3.2H72.17Z"/>
              <path className={styles.cls5} d="M74.52,35.2h1.8v5.72h-1.8Z"/>
              <path className={styles.cls5} d="M77.21,35.2h2.63a2.86,2.86,0,1,1,0,5.72H77.21Zm2.55,4.22a1.36,1.36,0,0,0,0-2.72H79v2.72Z"/>
              <path className={styles.cls5} d="M83.19,40.47l.58-1.41a3.44,3.44,0,0,0,1.76.52c.51,0,.69-.11.69-.31,0-.72-2.94-.14-2.94-2.27,0-1.06.83-1.93,2.48-1.93a3.92,3.92,0,0,1,2,.5L87.23,37a3.07,3.07,0,0,0-1.49-.43c-.52,0-.69.17-.69.36,0,.69,3,.12,3,2.23,0,1-.83,1.92-2.48,1.92A4.56,4.56,0,0,1,83.19,40.47Z"/>
              <path className={styles.cls5} d="M0,7.93H7.84V26.3h10.5v6.5H0Z"/>
              <path className={styles.cls5} d="M88,26.48V32.8H68.67V7.93h18.9v6.33H76.37v2.91h9.84v6H76.37v3.27Z"/>
              <path className={styles.cls5} d="M68.67,7.93,58.83,32.8h-7.7L41.3,7.93h8.43l5.55,14.53L61,7.93Z"/>
            </g>
          </g>
        </svg>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 40,
          fontStyle: 'normal',
          color: 'black',
          marginTop: 0,
          lineHeight: 1.8,
          whiteSpace: 'pre-wrap',
        }}
      >
        <b style={{ background: '#fff' }}>{title}</b>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      />
    </div>
  )
}