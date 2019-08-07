import { h, init } from 'snabbdom';

const patch = init([]);

const MyComponent = props => {
    return h('h1', props.title);
}

const prevVnode = MyComponent({ title: 'prev' });
patch(document.getElementById('app'), prevVnode);

// 两秒之后重渲染
setTimeout(() => {
    const nextVnode = MyComponent({ title: 'next' });
    patch(prevVnode, nextVnode)
}, 2000);
