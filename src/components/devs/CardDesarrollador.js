import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../../assets/styles/devs/CardDesarrollador.scss";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CardDesarrollador({ nombre, papel, redes }) {
  return (
    <div className="cont-dev">
      <div className="img-dev">
        <img src="#" />
      </div>
      <div className="name-dev">
        <h2>{nombre}</h2>
      </div>
      <div className='papel-dev'>
        <h4>{papel}</h4>
      </div>
      <div className="cont-social-dev">
        <div className='social-dev'>
          <div className='icon'>
            <a target="_blank" href={redes.linkedIn}>
              <LinkedInIcon fontSize={'large'} sx={{color:"000" }} />
            </a>
          </div>
          <div className='icon' >
            <a href="mailto:?subject=;body=" title="Share by Email">
              <EmailIcon fontSize={'large'} sx={{color:"000" }} />
            </a>
          </div>
          <div className='icon'>
            <a target="_blank" href={redes.linkedIn}>
              <GitHubIcon fontSize={'large'} sx={{color:"000" }} />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardDesarrollador