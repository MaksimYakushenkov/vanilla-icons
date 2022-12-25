import './App.css';
import VanillaIcon from './utils/vanilla-icons/VanillaIcon';
import { BoldIconsList, RegularIconsList, SolidIconsList } from './utils/vanilla-icons/IconsList';

function App() {

  return (
    <div className="App">
      <h1>Vanilla-Icons</h1>
      <p><b>Vanilla-Icons</b> это бесплатный <b>React-компонент</b> для быстрой вставки <b>Flat иконки</b> в любую часть проекта. За основу взяты svg изображения с сайта <a href="https://www.flaticon.com" target="_blank" rel='noreferrer'>Flaticon</a>. Прочтите <a href='https://github.com/MaksimYakushenkov/vanilla-icons#readme' target="_blank" rel='noreferrer'>документацию</a>, чтобы узнать, как использовать этот компонент.</p>
      <h2>Regular Rounded</h2>
      <table>
        <tbody>
        {
          RegularIconsList.map(((icon, index) =>
          <tr key={index}>
            <td  className='icon__container'>
              <VanillaIcon icon={icon} color="icon-primary-color" size={30}/>
              <h3>{icon}</h3>
            </td>
          </tr>
          ))
        }     
        </tbody>
      </table>
      <h2>Solid Rounded</h2>
      <table>
        <tbody>
        {
          SolidIconsList.map(((icon, index) =>
          <tr key={index}>
            <td  className='icon__container'>
              <VanillaIcon icon={icon} color="icon-primary-color" size={30}/>
              <h3>{icon}</h3>
            </td>
          </tr>
          ))
        }     
        </tbody>
      </table>
      <h2>Bold Rounded</h2>
      <table>
        <tbody>
        {
          BoldIconsList.map(((icon, index) =>
          <tr key={index}>
            <td  className='icon__container'>
              <VanillaIcon icon={icon} color="icon-primary-color" size={30}/>
              <h3>{icon}</h3>
            </td>
          </tr>
          ))
        }     
        </tbody>
      </table>
    </div>
  );
}

export default App;
