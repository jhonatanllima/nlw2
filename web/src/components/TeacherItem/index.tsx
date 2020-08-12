import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import './styles.css';  


 export interface Teacher{
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;

}

 interface teacherItemProps{
  teacher: Teacher;
}

const TeacherItem: React.FC<teacherItemProps> = ({teacher}) => {
  function createNewConection(){
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return(
    <article className="teacher-item">
    <header>
      <img src={teacher.avatar} alt={teacher.name}/>
      <div>
        <strong>{teacher.name}</strong>
        <span>{teacher.subject}</span>
      </div>
    </header>

    <p>
    {teacher.bio}
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ {teacher.cost}</strong>
      </p>
      <a target="_blank" onClick={createNewConection} href={'https://api.whatsapp.com/send?phone=${teacher.whatsapp}&text=Ol%C3%A1%20Proffy%2C%20tudo%20bem%3F%20Necessito%20de%20suas%20aulas!'}>
        <img src={whatsappIcon} alt="whatsapp"/>
        Entrar em Contato
      </a>
    </footer>

  </article>
  );
}

export default TeacherItem;

