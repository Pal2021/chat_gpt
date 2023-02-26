import logo from './logo.svg';
import './App.css';
import './normal.css';
function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
       <div className="side-memu-button">
        <span>+</span>
        New Chat
       </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
         <div className="chat-massage">
          <div className="chat-massage-center">
          <div className="avtar">
                   me
                  </div>
          <div className="massage">
          hellow Mr pal
          </div>
         </div>
        </div>
        <div className="chat-massage chatgpt">
          <div className="chat-massage-center">
          <div className="avtar">
                   me
                  </div>
          <div className="massage">
            i am Mr Pal
          </div>
         </div>
        </div>
        </div>
       <div
       className="chat-input-holder">
        <textarea
        row="1"
        className="chat-inpt-textarea"></textarea>
       </div>
      </section>
    </div>
  );
}

export default App;
