import './index.less'

export function Move() {
  return <div style={{height: '100%', position: 'absolute', top: '0',zIndex:'33'}}>
    <div className="x">
      <div className="y">
        <div className={'moveImg'}/>
      </div>
    </div>
  </div>
}
