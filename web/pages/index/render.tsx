import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'
import './index.less'

export default function Index() {
  const [open, toggle] = useState(false)
  const props = useSpring({ width: open ? 200 : 0 })

  return (
    <div>
      123
      <div onClick={() => toggle(!open)} className='main'>
        <animated.div className='fill' style={props} />
        <animated.div className='content'>
          {props.width.to((x) => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  )
}
