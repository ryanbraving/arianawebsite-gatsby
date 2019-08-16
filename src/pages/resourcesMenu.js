import React from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import { styles } from "../utils"
import classNames from "classnames"
import { Link } from "gatsby"

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }
  return (
    <LinkWrapper>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Link activeClassName="active" to={props.item.path}>
          <Typography className={classNames("item", "textFR")}>
            {props.item.name}
          </Typography>
        </Link>
      </Button>
      {props.item.id === 2 ? (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <p className="item textFR" style={{ fontFamily: "Vazir" }}>
              وبلاگ
            </p>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            {" "}
            <p className="item textFR" style={{ fontFamily: "Vazir" }}>
              ویدیوکست
            </p>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <p className="item textFR" style={{ fontFamily: "Vazir" }}>
              پادکست
            </p>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <p className="item textFR" style={{ fontFamily: "Vazir" }}>
              جملات الهام بخش
            </p>
          </MenuItem>
        </Menu>
      ) : null}
    </LinkWrapper>
  )
}

const LinkWrapper = styled.div`
  .item {
    white-space: nowrap;
    border: transparent 0.15rem solid;
    display: block;
    /* float: right;
    clear: right; */
    text-decoration: none;
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
    color: ${styles.colors.mainGrey};
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;

    &:hover {
      ${styles.transDefault};

      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      /* padding: 0.5rem 1rem 0.5rem 1.3rem; */
    }
  }
  .textFR {
    direction: rtl;
    font-family: "Vazir";
  }
`
