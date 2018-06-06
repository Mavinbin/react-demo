import React from 'react'
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

export default examples