import React from 'react'


// export default props => React.createElement('section', props)



export default  ({children, ...props}) =>
<section {...props}>{children}</section>