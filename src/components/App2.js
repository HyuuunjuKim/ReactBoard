import React, { Component } from 'react';

class App2 extends Component {
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
        
        return (
            <div>
                <table border="1">
                    <tbody>
                        <tr align="center">
                            <td width="50">No.</td>
                            <td width="300">Title</td>
                            <td width="100">Name</td>
                            <td width="100">Date</td>
                        </tr>
                        {
                            boards.map(board =>
                                (<BoardItem key={board.no} board = {board}/>)
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

class BoardItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.board.no}</td>
                <td>{this.props.board.title}</td>
                <td>{this.props.board.writer}</td>
                <td>{this.props.board.date.toLocaleDateString('ko-KR')}</td>
            </tr>
        );
    }

}

export default App2;