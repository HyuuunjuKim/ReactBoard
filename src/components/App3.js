import React, { Component } from 'react';

class App3 extends Component {
    state = {
        maxNo: 3,
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
    handleSaveData = (data) => {
        this.setState({
            maxNo: this.state.maxNo+1,
            boards: this.state.boards.concat({ no: this.state.maxNo, date: new Date(), ...data })
        });
    }
    render () { // 화면을 생성하기 위해 실행하는 이벤트
        const { boards } = this.state;
        
        return (
            <div>
                <BoardForm onSaveData={this.handleSaveData}/>
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

class BoardForm extends Component {
    state = {} // BoardForm내부에서 사용하는 state

    handleChange = (e) => { // 여기서 e는 change 이벤트에서 파라미터로 넘어오는 event
        this.setState({ // 저장하는 함수
            [e.target.name]: e.target.value // e.target은 현재 이벤트가 발생한 객체
        })
    }
    handleSubmit = (e) => { // form태그가 값을 서버로 전송할 때 발생하는 이벤트를 처리하기 위한 핸들러
        e.preventDefault(); // 실제 서버로 보내는게 아니라서 사용
        this.props.onSaveData(this.state); //onSavaData 함수를 호출하여 데이터 저장
        this.setState({}); 
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" name="title" onChange={this.handleChange}/>
                <input placeholder="witer" name="writer" onChange={this.handleChange}/>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default App3;