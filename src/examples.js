import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import Highlighter from './components/highlighter'

const examples = []
examples[0] = () => {
    const code = `
        // JSX
        const element = <h1>Hello, world!</h1>
    `
    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                <h1>Hello, world!</h1>
            </div>
        </div>
    )
}


examples[1] = () => {
    const code = `
        // JSX中使用表达式
        function formatName(user) {
            return user.firstName + ' ' + user.lastName;
        }

        const user = {
            firstName: 'Harper',
            lastName: 'Perez'
        };

        const element = (
            <h1>
                Hello, {formatName(user)}!
            </h1>
        );

        ReactDOM.render(
            element,
            document.getElementById('app')
        );`

    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    const element = (
        <h1>
            Hello, {formatName(user)}!
        </h1>
    );

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                {element}
            </div>
        </div>
    )
}

examples[2] = () => {
    const code = `
        // JSX本身其实也是一种表达式
        function getGreeting(user) {
            if (user) {
                return <h1>Hello, {formatName(user)}!</h1>;
            }
            return <h1>Hello, Stranger.</h1>;
        }

        function formatName(name) {
            let [...formatName] = name
            formatName[0] = formatName[0].toUpperCase()
            return formatName
        }

        const element = (
            <div>
                {getGreeting('mavinbin')}
                {getGreeting()}
            </div>
        )

        ReactDOM.render(
            element,
            document.getElementById('app')
        );
    `

    function getGreeting(user) {
        if (user) {
            return <h1>Hello, {formatName(user)}!</h1>;
        }
        return <h1>Hello, Stranger.</h1>;
    }

    function formatName(name) {
        let [...formatName] = name
        formatName[0] = formatName[0].toUpperCase()
        return formatName
    }

    const element = (
        <div>
            {getGreeting('mavinbin')}
            {getGreeting()}
        </div>
    )

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                {element}
            </div>
        </div>
    )
}

examples[3] = () => {
    const code = `
        // JSX属性
        const user = {
            name: 'Mavinbin',
            avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibT74KbP6icy0SBLaRwJvodqRibqUPcrFib7vGQMxvu2hibUm6SZ6pjGAzUwFYT4D7hv2JMJvokELuBQ/132',
            gender: 1
        }
        const element1 = <div tabIndex="0"></div>;

        const element2 = <img src={user.avatarUrl}></img>;
    `

    const user = {
        name: 'Mavinbin',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibT74KbP6icy0SBLaRwJvodqRibqUPcrFib7vGQMxvu2hibUm6SZ6pjGAzUwFYT4D7hv2JMJvokELuBQ/132',
        gender: 1
    }

    const element1 = <div tabIndex="0"></div>;
    const element2 = <img src={user.avatarUrl}></img>;

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                {element1}
                {element2}
            </div>
        </div>
    )
}

examples[4] = () => {
    const code = `
        const user = {
            name: 'Mavinbin',
            avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibT74KbP6icy0SBLaRwJvodqRibqUPcrFib7vGQMxvu2hibUm6SZ6pjGAzUwFYT4D7hv2JMJvokELuBQ/132',
            gender: 1
        }

        // 没有子元素则像XML一样闭合
        const element1 = <img src={user.avatarUrl} />;

        // JSX 嵌套
        const element2 = (
            <div>
                <h1>Hello!</h1>
                <h2>Good to see you here.</h2>
            </div>
        );
    `

    const user = {
        name: 'Mavinbin',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibT74KbP6icy0SBLaRwJvodqRibqUPcrFib7vGQMxvu2hibUm6SZ6pjGAzUwFYT4D7hv2JMJvokELuBQ/132',
        gender: 1
    }

    const element1 = <img src={user.avatarUrl} />;

    const element2 = (
        <div>
            <h1>Hello!</h1>
            <h2>Good to see you here.</h2>
        </div>
    );

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                {element1}
                {element2}
            </div>
        </div>
    )
}


examples[5] = () => {
    const code = `
        // JSX防注入攻击(XSS)
        const response = {
            potentiallyMaliciousInput: '<script>alert(1)</script>'
        }
        const title = response.potentiallyMaliciousInput;
        const element = <h1>{title}</h1>;
    `

    const response = {
        potentiallyMaliciousInput: '<script>alert(1)</script>'
    }
    const title = response.potentiallyMaliciousInput;
    const element = <h1>{title}</h1>;

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                {element}
            </div>
        </div>
    )
}

examples[6] = () => {
    const code = `
        // JSX代表对象，下面的element1和element2等效
        const element1 = (
            <h1 className="greeting">
            Hello, world!
            </h1>
        );

        // 实际上Babel会把JSX转换为React.createElement()的方法调用
        const element2 = React.createElement(
            'h1',
            {className: 'greeting'},
            'Hello, world!'
        );

        // React.createElement()会返回类似下面的对象
        const element3 = {
            type: 'h1',
            props: {
              className: 'greeting',
              children: 'Hello, world'
            }
        };
    `

    const element1 = (
        <h1 className="greeting">
        Hello, world!
        </h1>
    );

    const element2 = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
    );

    const element3 = {
        type: 'h1',
        props: {
          className: 'greeting',
          children: 'Hello, world'
        }
    };

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                {element1}
                {element2}
            </div>
        </div>
    )
}

examples[7] = () => {
    const code = `
    // 本质上JSX是React.createElement(component, props, ...children)的语法糖
    <MyButton color="blue" shadowSize={2}>
        Click Me
    </MyButton>

    // 上面的例子编译如下：
    React.createElement(
        MyButton,
        {color: 'blue', shadowSize: 2},
        'Click Me'
    )

    // 如果不存在子节点，使用自闭合（self-closing）格式的标签
    <div className="sidebar">

    // 上面的例子编译如下：
    React.createElement(
        'div',
        {className: 'sidebar'},
        null
    )
    `
    function MyButton (props) {
        const style = {
            color: props.color || '#333',
            boxShadow: `${props.shadowSize}px ${props.shadowSize}px #ccc`
        }
        return (
            <button style={style}>{props.children}</button>
        )
    }

    const element = (
        <MyButton color="blue" shadowSize={2}>
            Click Me
        </MyButton>
    )

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                {element}
            </div>
        </div>
    )
}

examples[8] = () => {
    const code = `
        import React from 'react'; // 这里React必须引入
        import CustomButton from './CustomButton';

        function WarningButton() {
            // return React.createElement(CustomButton, {color: 'red'}, null);
            return <CustomButton color="red" />;
        }

    `

    function CustomButton(props) {
        const style = {
            color: props.color || '#333'
        }
        return (
            <button style={style}>Warning!</button>
        )
    }

    function WarningButton() {
        return <CustomButton color="red" />
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                <WarningButton />
            </div>
        </div>
    )
}

examples[9] = () => {
    const code = `
        // 对JSX类型使用点语法（要获取某一多组件导出的模块中的某个组件时）

        import React from 'react';

        const MyComponents = {
            DatePicker: function DatePicker(props) {
                return <div>Imagine a {props.color} datepicker here.</div>;
            }
        }

        function BlueDatePicker() {
            return <MyComponents.DatePicker color="blue" />;
        }
    `

    const MyComponents = {
        DatePicker: function DatePicker(props) {
            return <div>Imagine a {props.color} datepicker here.</div>;
        }
    }

    function BlueDatePicker() {
        return <MyComponents.DatePicker color="blue" />;
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                <BlueDatePicker />
            </div>
        </div>
    )
}

examples[10] = () => {
    const code = `

        // 在运行时选择JSX组件的类型
        import React from 'react';
        import { PhotoStory, VideoStory } from './stories';

        const components = {
            photo: PhotoStory,
            video: VideoStory
        };

        function Story(props) {
            // 错误，JSX类型不能是表达式
            //return <components[props.storyType] story={props.story} />;

            // 正确！JSX 类型可以是一个以大写字母开头的变量.
            const SpecificStory = components[props.storyType];
            return <SpecificStory story={props.story} />;
        }
    `

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" />
        </div>
    )
}

examples[11] = () => {
    const code = `
        // JSX的props默认为值true,这种行为是为了和HTML的行为匹配

        <MyTextBox disabled />

        <MyTextBox disabled={true} />
    `

    function MyTextBox(props) {
        return (
            <input type="text" disabled={props.disabled}/>
        )
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                <MyTextBox disabled/>
            </div>
        </div>
    )
}

examples[12] = () => {
    const code = `
        // 可以使用扩展操作符来传入整个props对象,下面的例子等效
        function App1() {
            return <Greeting firstName="Ben" lastName="Hector" />;
        }

        function App2() {
            const props = {firstName: 'Ben', lastName: 'Hector'};
            return <Greeting {...props} />;
        }
    `

    function Greeting(props) {
        return (
            <h2>Hello, {props.firstName + props.lastName}</h2>
        )
    }

    function App1() {
        return <Greeting firstName="Ben" lastName="Hector" />;
    }

    function App2() {
        const props = {firstName: 'Ben', lastName: 'Hector'};
        return <Greeting {...props} />;
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                <App1 />
                <App2 />
            </div>
        </div>
    )
}

examples[13] = () => {
    const code = `
        // JSX的Children是字符串
        const element = (
            <div>
                <div>This is valid HTML &amp; JSX at the same time.</div>
                <div>Hello World</div>
                <div>
                    Hello World
                </div>
                <div>
                    Hello
                    World
                </div>
                <div>

                    Hello World
                </div>
            </div>
        )
    `

    const element = (
        <div>
            <div>This is valid HTML &amp; JSX at the same time.</div>
            <div>Hello World</div>
            <div>
                Hello World
            </div>
            <div>
                Hello
                World
            </div>
            <div>

                Hello World
            </div>
        </div>
    )

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                {element}
            </div>
        </div>
    )
}

examples[14] = () => {
    const code = `
        // JSX的children是JSX

        <MyContainer>
            <MyFirstComponent />
            <MySecondComponent />
        </MyContainer>

        // -------------------------

        <div>
            Here is a list:
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>
    `
    const style = {
        border: '1px solid #ccc',
        margin: 10,
        padding: 10
    }

    function MyContainer(props) {
        return (
            <div style={style}>
                MyContainer
                {props.children}
            </div>
        )
    }

    function MyFirstComponent(props) {
        return (
            <div style={style}>MyFirstComponent</div>
        )
    }

    function MySecondComponent(props) {
        return (
            <div style={style}>MySecondComponent</div>
        )
    }

    const element1 = (
        <MyContainer>
            <MyFirstComponent />
            <MySecondComponent />
        </MyContainer>
    )

    const element2 = (
        <div>
            Here is a list:
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>
    )

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                {element1}
                <div>-----------------------------------------------</div>
                {element2}
            </div>
        </div>
    )
}

examples[15] = () => {
    const code = `
        // JSX的children为JS表达式

        function Item(props) {
            return <li>{props.message}</li>;
        }

        function TodoList() {
            const todos = ['finish doc', 'submit pr', 'nag dan to review'];
            return (
                <ul>
                    {todos.map((message) => <Item key={message} message={message} />)}
                </ul>
            );
        }
    `

    function Item(props) {
        return <li>{props.message}</li>;
    }

    function TodoList() {
        const todos = ['finish doc', 'submit pr', 'nag dan to review'];
        return (
            <ul>
                {todos.map((message) => <Item key={message} message={message} />)}
            </ul>
        );
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                <TodoList />
            </div>
        </div>
    )
}

examples[16] = () => {
    const code = `
        // JSX的children为函数

        function Repeat(props) {
            let items = [];
            for (let i = 0; i < props.numTimes; i++) {
                items.push(props.children(i));
            }
            return <div>{items}</div>;
        }

        function ListOfTenThings() {
            return (
                <Repeat numTimes={10}>
                    {(index) => <div key={index}>This is item {index} in the list</div>}
                </Repeat>
            );
        }
    `

    function Repeat(props) {
        let items = [];
        for (let i = 0; i < props.numTimes; i++) {
            items.push(props.children(i));
        }
        return <div>{items}</div>;
    }

    function ListOfTenThings() {
        return (
            <Repeat numTimes={10}>
                {(index) => <div key={index}>This is item {index} in the list</div>}
            </Repeat>
        );
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                <ListOfTenThings />
            </div>
        </div>
    )
}

examples[17] = () => {
    const code = `
        // JSX的children为Booleans, Null和Undefined,这些都将被忽略而不会渲染
        <div />
        <div></div>
        <div>{false}</div>
        <div>{null}</div>
        <div>{undefined}</div>
        <div>{true}</div>

        // 条件渲染在渲染React元素时很有用
        <div>
            {showHeader && <Header />}
            <Content />
        </div>

        // 但是需要主要“falsy”值，比如0是会被渲染的
        <div>
            {props.messages.length &&
                <MessageList messages={props.messages} />
            }
        </div>

        <div>
            {props.messages.length > 0 &&
                <MessageList messages={props.messages} />
            }
        </div>

        // 如果要输出false、true、null或undefined,需要将其转为字符串
        <div>
            My JavaScript variable is {String(myVariable)}.
        </div>
    `

    const element1 = (
        <div>
            <div />
            <div></div>
            <div>{false}</div>
            <div>{null}</div>
            <div>{undefined}</div>
            <div>{true}</div>
        </div>
    )

    const style = {
        border: '1px solid #ccc',
        padding: 10,
        margin: 10
    }

    const showHeader = true

    function Header() {
        return (
            <div style={style}>
                <a href="javascript:;">nav1</a>
                <a href="javascript:;">nav2</a>
                <a href="javascript:;">nav3</a>
            </div>
        )
    }

    function Content(props) {
        return <div style={style}>Content</div>
    }

    const element2 = (
        <div>
            {showHeader && <Header />}
            <Content />
        </div>
    )

    function MessageList(props) {
        return (
            <div>
                {props.messages.map(message => <p>Message:{message}</p>)}
            </div>
        )
    }

    function MessageBox1(props) {
        return (
            <div>
                {props.messages.length &&
                    <MessageList messages={props.messages} />
                }
            </div>
        )
    }

    function MessageBox2(props) {
        return (
            <div>
                {props.messages.length > 0 &&
                    <MessageList messages={props.messages} />
                }
            </div>
        )
    }

    const messages = []

    const element3 = (
        <div>
            <MessageBox1 messages={messages} />
            <MessageBox2 messages={messages} />
        </div>
    )

    const myVariable = true

    const element4 = (
        <div>
            My JavaScript variable is {String(myVariable)}.
        </div>
    )

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                {element1}
                <div>-----------------------------------------------</div>
                {element2}
                <div>-----------------------------------------------</div>
                {element3}
                <div>-----------------------------------------------</div>
                {element4}
            </div>
        </div>
    )
}

examples[18] = () => {
    const code = `
        // 渲染元素到DOM中

        // 假设HTML中有一个ID为app的<div>
        <div id="app"></div>

        // 我们通过ReactDOM.render()方法来渲染一个元素到根DOM节点上
        const element = <h1>Hello, world</h1>;
        ReactDOM.render(
            element,
            document.getElementById('app')
        );
    `

    const element = <h1>Hello, world</h1>;

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result">
                {element}
            </div>
        </div>
    )
}

examples[19] = () => {
    const code = `
        // 更新已渲染元素

        function tick() {
            const element = (
                <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
                </div>
            );
            ReactDOM.render(
                element,
                document.getElementById('app')
            );
        }

        setInterval(tick, 1000);
    `

    let element

    function tick() {
        const element = (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );

        ReactDOM.render(
            element,
            document.getElementById('result')
        );
    }

    setInterval(tick, 1000);

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
            </div>
        </div>
    )
}

examples[20] = () => {
    const code = `
        // 函数式组件
        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }

        // 类组件
        class Welcome extends React.Component {
            render() {
                return <h1>Hello, {this.props.name}</h1>;
            }
        }
    `
    function Welcome1(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    class Welcome2 extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <Welcome1 name="Mavinbin" />
                <Welcome2 name="Mavinbin"/>
            </div>
        </div>
    )
}

examples[21] = () => {
    const code = `
        // 自定义组件，首字母大写
        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }

        const element = <Welcome name="Sara" />;
        ReactDOM.render(
            element,
            document.getElementById('root')
        );
    `
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    const element = <Welcome name="Sara" />;

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                {element}
            </div>
        </div>
    )
}

examples[22] = () => {
    const code = `
        // 构建组件
        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }

        function App() {
            return (
                <div>
                    <Welcome name="Sara" />
                    <Welcome name="Cahal" />
                    <Welcome name="Edite" />
                </div>
            );
        }

        ReactDOM.render(
            <App />,
            document.getElementById('app')
        );
    `

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    function App() {
        return (
            <div>
                <Welcome name="Sara" />
                <Welcome name="Cahal" />
                <Welcome name="Edite" />
            </div>
        );
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <App />
            </div>
        </div>
    )
}

examples[23] = () => {
    const code = `
        // 提取组件

        // 未提取前
        function Comment(props) {
            return (
                <div className="Comment">
                    <div className="UserInfo">
                        <img className="Avatar"
                            src={props.author.avatarUrl}
                            alt={props.author.name}
                        />
                    <div className="UserInfo-name">
                        {props.author.name}
                    </div>
                </div>
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
              </div>
            );
        }


        // 提取后
        function Avatar(props) {
            return (
                <img className="Avatar"
                    src={props.user.avatarUrl}
                    alt={props.user.name}
                />

            );
        }

        function UserInfo(props) {
            return (
                <div className="UserInfo">
                    <Avatar user={props.user} />
                    <div className="UserInfo-name">
                    {props.user.name}
                    </div>
                </div>
            );
        }

        function Comment(props) {
            return (
                <div className="Comment">
                    <UserInfo user={props.author} />
                    <div className="Comment-text">
                    {props.text}
                    </div>
                    <div className="Comment-date">
                    {formatDate(props.date)}
                    </div>
                </div>
            );
        }
    `
    function formatDate(date) {
        const _date = new Date()
        return `${_date.getFullYear()}-${_date.getMonth() + 1}-${_date.getDate()}`
    }

    function Avatar(props) {
        return (
            <img className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />

        );
    }

    function UserInfo(props) {
        return (
            <div className="UserInfo">
                <Avatar user={props.user} />
                <div className="UserInfo-name">
                {props.user.name}
                </div>
            </div>
        );
    }

    function Comment(props) {
        return (
            <div className="Comment">
                <UserInfo user={props.author} />
                <div className="Comment-text">
                {props.text}
                </div>
                <div className="Comment-date">
                {formatDate(props.date)}
                </div>
            </div>
        );
    }

    const commentInfo = {
        author: {
            name: 'Mavinbin',
            avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibT74KbP6icy0SBLaRwJvodqRibqUPcrFib7vGQMxvu2hibUm6SZ6pjGAzUwFYT4D7hv2JMJvokELuBQ/132'
        },
        text: '测试评论',
        date: new Date()
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <Comment {...commentInfo}/>
            </div>
        </div>
    )
}

examples[24] = () => {
    const code = `
        // 函数式组件转为类组件

        // 原函数式组件
        function tick() {
            const element = (
                <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
                </div>
            );
            ReactDOM.render(
                element,
                document.getElementById('root')
            );
        }

        setInterval(tick, 1000);

        // 转化为类组件并添加生命周期
        class Clock extends React.Component {
            constructor(props) {
                super(props);
                this.state = {date: new Date()};
            }

            componentDidMount() {
                this.timerID = setInterval(
                    () => this.tick(),
                    1000
                );
            }

            componentWillUnmount() {
                clearInterval(this.timerID);
            }

            tick() {
                this.setState({
                    date: new Date()
                });
            }

            render() {
                return (
                    <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    </div>
                );
            }
        }

        ReactDOM.render(
            <Clock />,
            document.getElementById('root')
        );
    `

    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {date: new Date()};
        }

        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {
            this.setState({
                date: new Date()
            });
        }

        render() {
            return (
                <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div>
            );
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <Clock/>
            </div>
        </div>
    )
}

examples[25] = () => {
    const code = `
        // 正确使用State

        // 1.不要直接修改state, 而是通过setState来修改
        // 错误
        this.state.comment = 'Hello';

        // 正确
        this.setState({comment: 'Hello'});


        // 2.state更新可能是异步的
        // 错误
        this.setState({
            counter: this.state.counter + this.props.increment,
        });

        // 正确
        this.setState((prevState, props) => ({
            counter: prevState.counter + props.increment
        }));
    `

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">

            </div>
        </div>
    )
}

examples[26] = () => {
    const code = `
    class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};

            // 这个绑定是必要的，使this在回调中起作用
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }

        render() {
            return (
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            );
        }

        ReactDOM.render(
            <Toggle />,
            document.getElementById('app')
        );
    }
    `

    class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};

            // 这个绑定是必要的，使this在回调中起作用
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }

        render() {
            return (
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            );
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <Toggle />
            </div>
        </div>
    )
}

examples[27] = () => {
    const code = `
        class LoggingButton extends React.Component {
            handleClick() {
                console.log('this is:', this);
            }

            render() {
                // 这个语法确保this被绑定在handleClick 中
                return (
                    <button onClick={(e) =>         this.handleClick(e)}>
                    Click me
                    </button>
                );
            }
        }
    `

    class LoggingButton extends React.Component {
        handleClick(id, e) {
            console.log('this is:', this);
            console.log('id is:', id);
            console.log('e:', e);
        }

        render() {
            // 这个语法确保 `this` 被绑定在 handleClick 中
            const id = 1
            return (
                <div>
                    <button onClick={(e) => this.handleClick(id, e)}>Click me</button>
                    <button onClick={this.handleClick.bind(this, id)}>Click me</button>
                </div>
            );
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <LoggingButton />
            </div>
        </div>
    )
}

examples[28] = () => {
    const code = `
        // 条件渲染

        function UserGreeting(props) {
            return <h1>Welcome back!</h1>;
        }

        function GuestGreeting(props) {
            return <h1>Please sign up.</h1>;
        }

        function Greeting(props) {
            const isLoggedIn = props.isLoggedIn;
            if (isLoggedIn) {
                return <UserGreeting />;
            }
            return <GuestGreeting />;
        }

        function LoginButton(props) {
            return (
                <button onClick={props.onClick}>
                    Login
                </button>
            );
        }

        function LogoutButton(props) {
            return (
                <button onClick={props.onClick}>
                    Logout
                </button>
            );
        }

        class LoginControl extends React.Component {
            constructor(props) {
                super(props);
                this.handleLoginClick = this.handleLoginClick.bind(this);
                this.handleLogoutClick = this.handleLogoutClick.bind(this);
                this.state = {isLoggedIn: false};
            }

            handleLoginClick() {
                this.setState({isLoggedIn: true});
            }

            handleLogoutClick() {
                this.setState({isLoggedIn: false});
            }

            render() {
                const isLoggedIn = this.state.isLoggedIn;

                let button = null;
                if (isLoggedIn) {
                    button = <LogoutButton onClick={this.handleLogoutClick} />;
                } else {
                    button = <LoginButton onClick={this.handleLoginClick} />;
                }

                return (
                    <div>
                        <Greeting isLoggedIn={isLoggedIn} />
                        {button}
                    </div>
                );
            }
        }

        ReactDOM.render(
            <LoginControl />,
            document.getElementById('app')
        );
    `
    function UserGreeting(props) {
        return <h1>Welcome back!</h1>;
    }

    function GuestGreeting(props) {
        return <h1>Please sign up.</h1>;
    }

    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }

    function LoginButton(props) {
        return (
            <button onClick={props.onClick}>
                Login
            </button>
        );
    }

      function LogoutButton(props) {
        return (
            <button onClick={props.onClick}>
                Logout
            </button>
        );
    }

    class LoginControl extends React.Component {
        constructor(props) {
            super(props);
            this.handleLoginClick = this.handleLoginClick.bind(this);
            this.handleLogoutClick = this.handleLogoutClick.bind(this);
            this.state = {isLoggedIn: false};
        }

        handleLoginClick() {
            this.setState({isLoggedIn: true});
        }

        handleLogoutClick() {
            this.setState({isLoggedIn: false});
        }

        render() {
            const isLoggedIn = this.state.isLoggedIn;

            let button = null;
            if (isLoggedIn) {
                button = <LogoutButton onClick={this.handleLogoutClick} />;
            } else {
                button = <LoginButton onClick={this.handleLoginClick} />;
            }

            return (
                <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                </div>
            );
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <LoginControl />
            </div>
        </div>
    )
}

examples[29] = () => {
    const code = `
        // 使用逻辑 && 操作符的内联 if 用法

        function Mailbox(props) {
            const unreadMessages = props.unreadMessages;
            return (
                <div>
                    <h1>Hello!</h1>
                    {unreadMessages.length > 0 &&
                        <h2>
                            You have {unreadMessages.length} unread messages.
                        </h2>
                    }
                </div>
            );
          }

          const messages = ['React', 'Re: React', 'Re:Re: React'];
          ReactDOM.render(
                <Mailbox unreadMessages={messages} />,
                document.getElementById('root')
        );
    `

    function Mailbox(props) {
        const unreadMessages = props.unreadMessages;
        return (
          <div>
            <h1>Hello!</h1>
                {unreadMessages.length > 0 &&
                    <h2>
                        You have {unreadMessages.length} unread messages.
                    </h2>
                }
          </div>
        );
    }

    const messages = ['React', 'Re: React', 'Re:Re: React'];

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
            <Mailbox unreadMessages={messages} />
            </div>
        </div>
    )
}

examples[30] = () => {
    const code = `
        // 使用条件操作符的内联 If-Else

        function UserGreeting(props) {
            return <h1>Welcome back!</h1>;
        }

        function GuestGreeting(props) {
            return <h1>Please sign up.</h1>;
        }

        function Greeting(props) {
            const isLoggedIn = props.isLoggedIn;
            if (isLoggedIn) {
                return <UserGreeting />;
            }
            return <GuestGreeting />;
        }

        function LoginButton(props) {
            return (
                <button onClick={props.onClick}>
                    Login
                </button>
            );
        }

          function LogoutButton(props) {
            return (
                <button onClick={props.onClick}>
                    Logout
                </button>
            );
        }

        class LoginControl extends React.Component {
            constructor(props) {
                super(props);
                this.handleLoginClick = this.handleLoginClick.bind(this);
                this.handleLogoutClick = this.handleLogoutClick.bind(this);
                this.state = {isLoggedIn: false};
            }

            handleLoginClick() {
                this.setState({isLoggedIn: true});
            }

            handleLogoutClick() {
                this.setState({isLoggedIn: false});
            }

            render() {
                const isLoggedIn = this.state.isLoggedIn;

                return (
                    <div>
                        <Greeting isLoggedIn={isLoggedIn} />
                        {isLoggedIn ? (
                            <LogoutButton onClick={this.handleLogoutClick} />
                        ) : (
                            <LoginButton onClick={this.handleLoginClick} />
                        )}
                    </div>
                );
            }
        }
    `

    function UserGreeting(props) {
        return <h1>Welcome back!</h1>;
    }

    function GuestGreeting(props) {
        return <h1>Please sign up.</h1>;
    }

    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }

    function LoginButton(props) {
        return (
            <button onClick={props.onClick}>
                Login
            </button>
        );
    }

      function LogoutButton(props) {
        return (
            <button onClick={props.onClick}>
                Logout
            </button>
        );
    }

    class LoginControl extends React.Component {
        constructor(props) {
            super(props);
            this.handleLoginClick = this.handleLoginClick.bind(this);
            this.handleLogoutClick = this.handleLogoutClick.bind(this);
            this.state = {isLoggedIn: false};
        }

        handleLoginClick() {
            this.setState({isLoggedIn: true});
        }

        handleLogoutClick() {
            this.setState({isLoggedIn: false});
        }

        render() {
            const isLoggedIn = this.state.isLoggedIn;

            return (
                <div>
                    <Greeting isLoggedIn={isLoggedIn} />
                    {isLoggedIn ? (
                        <LogoutButton onClick={this.handleLogoutClick} />
                    ) : (
                        <LoginButton onClick={this.handleLoginClick} />
                    )}
                </div>
            );
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <LoginControl />
            </div>
        </div>
    )
}

examples[31] = () => {
    const code = `
        // 防止组件渲染
        function WarningBanner(props) {
            if (!props.warn) {
                return null;
            }

            return (
                <div className="warning">
                    Warning!
                </div>
            );
        }

        class Page extends React.Component {
            constructor(props) {
                super(props);
                this.state = {showWarning: true}
                this.handleToggleClick = this.handleToggleClick.bind(this);
            }

            handleToggleClick() {
                this.setState(prevState => ({
                    showWarning: !prevState.showWarning
                }));
            }

            render() {
                return (
                    <div>
                        <WarningBanner warn={this.state.showWarning} />
                        <button onClick={this.handleToggleClick}>
                            {this.state.showWarning ? 'Hide' : 'Show'}
                        </button>
                    </div>
                );
            }
        }

        ReactDOM.render(
            <Page />,
            document.getElementById('app')
        );
    `
    function WarningBanner(props) {
        if (!props.warn) {
            return null;
        }

        return (
          <div className="warning">
                Warning!
          </div>
        );
    }

    class Page extends React.Component {
        constructor(props) {
            super(props);
            this.state = {showWarning: true}
            this.handleToggleClick = this.handleToggleClick.bind(this);
        }

        handleToggleClick() {
            this.setState(prevState => ({
                showWarning: !prevState.showWarning
            }));
        }

        render() {
            return (
                <div>
                    <WarningBanner warn={this.state.showWarning} />
                    <button onClick={this.handleToggleClick}>
                        {this.state.showWarning ? 'Hide' : 'Show'}
                    </button>
                </div>
            );
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <Page />
            </div>
        </div>
    )
}

examples[32] = () => {
    // 指定key的位置
    const code = `
        function ListItem(props) {
            // 正确！这里不需要指定 key ：
            return <li>{props.value}</li>;
        }

        function NumberList(props) {
            const numbers = props.numbers;
            const listItems = numbers.map((number) =>
            // 正确！key 应该在这里被指定
                <ListItem key={number.toString()}
                          value={number} />

            );
            return (
                <ul>
                    {listItems}
                </ul>
            );
        }

        const numbers = [1, 2, 3, 4, 5];
        ReactDOM.render(
            <NumberList numbers={numbers} />,
            document.getElementById('app')
        );
    `

    function ListItem(props) {
        // 正确！这里不需要指定 key ：
        return <li>{props.value}</li>;
    }

    function NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
        // 正确！key 应该在这里被指定
            <ListItem key={number.toString()}
                      value={number} />

        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }

    const numbers = [1, 2, 3, 4, 5];

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <NumberList numbers={numbers} />
            </div>
        </div>
    )
}

examples[33] = () => {
    const code = `
    class NameForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {value: ''};

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({value: event.target.value});
        }

        handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            );
        }
      }
    `

    class NameForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {value: ''};

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({value: event.target.value});
        }

        handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            );
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <NameForm />
            </div>
        </div>
    )
}

examples[34] = () => {
    const code = `
    class EssayForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 'Please write an essay about your favorite DOM element.'
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({value: event.target.value});
        }

        handleSubmit(event) {
            alert('An essay was submitted: ' + this.state.value);
            event.preventDefault();
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
            );
        }
      }
    `

    class EssayForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 'Please write an essay about your favorite DOM element.'
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({value: event.target.value});
        }

        handleSubmit(event) {
            alert('An essay was submitted: ' + this.state.value);
            event.preventDefault();
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
            );
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <EssayForm />
            </div>
        </div>
    )
}

examples[35] = () => {
    const code = `
        class FlavorForm extends React.Component {
            constructor(props) {
                super(props);
                this.state = {value: 'coconut'};

                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
            }

            handleChange(event) {
                this.setState({value: event.target.value});
            }

            handleSubmit(event) {
                alert('Your favorite flavor is: ' + this.state.value);
                event.preventDefault();
            }

            render() {
                return (
                    <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your favorite La Croix flavor:
                        <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
                );
            }
        }
    `

    class FlavorForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {value: 'coconut'};

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({value: event.target.value});
        }

        handleSubmit(event) {
            alert('Your favorite flavor is: ' + this.state.value);
            event.preventDefault();
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
                </form>
            );
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <FlavorForm />
            </div>
        </div>
    )
}

examples[36] = () => {
    const code = `
        class FileInput extends React.Component {
            constructor(props) {
                super(props);
                this.handleSubmit = this.handleSubmit.bind(
                    this
                );
            }
            handleSubmit(event) {
                event.preventDefault();
                alert(
                    \`Selected file - \${
                    this.fileInput.files[0].name
                    }\`
                );
            }

            render() {
                return (
                    <form
                    onSubmit={this.handleSubmit}>
                        <label>
                            Upload file:
                            <input
                            type="file"
                            ref={input => {
                                this.fileInput = input;
                            }}
                            />
                        </label>
                        <br />
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                );
            }
        }

        ReactDOM.render(
            <FileInput />,
            document.getElementById('root')
        );
    `

    class FileInput extends React.Component {
        constructor(props) {
            super(props);
            this.handleSubmit = this.handleSubmit.bind(
                this
            );
        }
        handleSubmit(event) {
            event.preventDefault();
            alert(
                `Selected file - ${
                this.fileInput.files[0].name
                }`
            );
        }

        render() {
            return (
                <form
                onSubmit={this.handleSubmit}>
                <label>
                    Upload file:
                    <input
                    type="file"
                    ref={input => {
                        this.fileInput = input;
                    }}
                    />
                </label>
                <br />
                <button type="submit">
                    Submit
                </button>
                </form>
            );
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <FileInput />
            </div>
        </div>
    )
}

examples[37] = () => {
    const code = `
        class Reservation extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    isGoing: true,
                    numberOfGuests: 2
                };

                this.handleInputChange = this.handleInputChange.bind(this);
            }

            handleInputChange(event) {
                const target = event.target;
                const value = target.type === 'checkbox' ? target.checked : target.value;
                const name = target.name;

                this.setState({
                    [name]: value
                });
            }

            render() {
                return (
                    <form>
                    <label>
                        Is going:
                        <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Number of guests:
                        <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                    </label>
                    </form>
                );
            }
        }
    `

    class Reservation extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isGoing: true,
                numberOfGuests: 2
            };

            this.handleInputChange = this.handleInputChange.bind(this);
        }

        handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });
        }

        render() {
            return (
                <form>
                    <label>
                        Is going:
                        <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Number of guests:
                        <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                    </label>
                </form>
            );
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <Reservation />
            </div>
        </div>
    )
}

examples[38] = () => {
    const code = `
        ReactDOM.render(<input value="hi" />, mountNode);

        setTimeout(function() {
            ReactDOM.render(<input value={null} />, mountNode);
        }, 5000);
    `

    setTimeout(function() {
        ReactDOM.render(<input value={null} />, document.getElementById('result'));
    }, 5000);

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <input value="hi" />
            </div>
        </div>
    )
}

examples[39] = () => {
    const code = `
        import PropTypes from 'prop-types';

        class Greeting extends React.Component {
            render() {
                return (
                <h1>Hello, {this.props.name}</h1>
                );
            }
        }

        Greeting.defaultProps = {
            name: 'Stranger'
        };

        Greeting.propTypes = {
            name: PropTypes.string
        };
    `

    class Greeting extends React.Component {
        render() {
            return (
                <h1>Hello, {this.props.name}</h1>
            );
        }
    }

    Greeting.propTypes = {
        name: PropTypes.string
    };

    Greeting.defaultProps = {
        name: 'Stranger'
    };

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <Greeting name="Mavinbin" />
            </div>
        </div>
    )
}

examples[40] = () => {
    const code = `
        // 在DOM元素上添加Ref

        class CustomTextInput extends React.Component {
            constructor(props) {
                super(props);
                this.focus = this.focus.bind(this);
                }

                focus() {
                // 通过使用原生API，显式地聚焦text输入框
                this.textInput.focus();
            }

            render() {
                // 在实例中通过使用\`ref\`回调函数来存储text输入框的DOM元素引用(例如:this.textInput)
                return (
                    <div>
                    <input
                        type="text"
                        ref={(input) => { this.textInput = input; }} />
                    <input
                        type="button"
                        value="Focus the text input"
                        onClick={this.focus}
                    />

                    </div>
                );
            }
        }

        // 为类组件添加Ref
        class AutoFocusTextInput extends React.Component {
            componentDidMount() {
                this.textInput.focus();
            }

            render() {
                return (
                    <CustomTextInput
                    ref={(input) => { this.textInput = input; }} />
                );
            }
        }
    `

    class CustomTextInput extends React.Component {
        constructor(props) {
            super(props);
            this.focus = this.focus.bind(this);
        }

        focus() {
            // 通过使用原生API，显式地聚焦text输入框
            this.textInput.focus();
        }

        render() {
          // 在实例中通过使用`ref`回调函数来存储text输入框的DOM元素引用(例如:this.textInput)
            return (
                <div>
                <input
                    type="text"
                    ref={(input) => { this.textInput = input; }} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focus}
                />

                </div>
            );
        }
    }

    class AutoFocusTextInput extends React.Component {
        componentDidMount() {
            this.textInput.focus();
        }

        render() {
            return (
                <CustomTextInput
                ref={(input) => { this.textInput = input; }} />
            );
        }
    }

    return (
        <div className="example-container">
            <Highlighter code={code} />
            <div className="result" id="result">
                <CustomTextInput />
                <AutoFocusTextInput />
            </div>
        </div>
    )

}

export default examples