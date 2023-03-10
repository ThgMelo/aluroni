import styles from './Itens.module.scss';
import Cardapio from './itens.json';
import Item from './Item';

export default function Itens() {
  return (
    <div className={styles.itens}>
        {Cardapio.map(item => (
            <Item key={item.id}/>
        ))}
    </div>
  );
}
