import PropTypes from "prop-types";

export default function IconButton(props: { Icon: PropTypes.ReactComponentLike, color: 'primary' | 'warning' }) {
  return (
    <div
      className="inline-block w-[34px] h-[34px] hover:bg-black/5 mr-3"
      style={{borderRadius: '20px', paddingLeft: '7px'}}
    >
      <props.Icon color={props.color} fontSize="small" style={{ marginTop: '6px', marginLeft: '-7px' }} />
    </div>
  )
}
