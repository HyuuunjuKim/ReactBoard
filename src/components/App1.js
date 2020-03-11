import React, { Component } from 'react';

class App1 extends Component {
    state = {
        boards: [
            {
                no: 1,
                writer: 'Hyunju Kim',
                title: 'hahaha',
                date: new Date()
            },
            {
                no: 2,
                writer: 'Jaesung Choi',
                title: 'asdasd',
                date: new Date()
            }
        ]
    }
    render () { // 화면을 생성하기 위해 실행하는 이벤트
        const { boards } = this.state;
        const list = boards.map(function(board) {
            return board.no + board.writer;
        });
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default App1;