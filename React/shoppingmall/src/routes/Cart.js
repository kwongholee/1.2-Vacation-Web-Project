import { memo, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { plusCount } from "../store";
import { changeAge, changeName } from "../store/userName";

let Child = memo(function() {
    return(
        <div>child</div>
    )
})

function 함수() {
    return 1e9;
}

function Cart() {

    useMemo(() => {return 함수()}, [/*state*/])

    let state1 = useSelector((state) => {return state.cartproduct});
    let b = useSelector((state) => {return state.userName})
    let dispatch = useDispatch(); //store.js로 요청을 보내주는 함수
    let [count, setCount] = useState(0)

    return (
        <div>
            <h6>{b.name} {b.age} cart</h6>
            <button onClick={() => {
                dispatch(changeAge(2));
            }}>btn</button>
            <Child></Child>
            <button onClick={() => {setCount(count+1)}}>+</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>       
                </thead>
                <tbody>
                    {
                        state1.map((a,i) => {
                            return(
                                <tr>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.count}</td>
                                    <td>
                                        <button onClick={() => {
                                            dispatch(plusCount(a.id))
                                        }}>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;