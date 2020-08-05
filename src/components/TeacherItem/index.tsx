import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';  

function TeacherItem () {
  return(
    <article className="teacher-item">
    <header>
      <img src="https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/60336815_2153456471428416_4448021955991306240_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=IEQjrShDnroAX97yYy_&_nc_ht=scontent.fcpq14-1.fna&oh=f5a7401e0fe97613a4a90a1c920721ee&oe=5F4F9B2A" alt="Jhonatan Lima"/>
      <div>
        <strong>Jhonatan Lima</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
     Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
     <br /><br />
     Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. 
     Atirei o pau no gatis, per gatis num morreus. Si num tem leite então bota uma pinga aí cumpadi!
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 2,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="whatsapp"/>
        Entrar em Contato
      </button>
    </footer>

  </article>
  );
}

export default TeacherItem;

