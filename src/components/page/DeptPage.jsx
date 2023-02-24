import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import DeptRow from '../dept/DeptRow'
import Bottom from '../include/Bottom'
import Header from '../include/Header'

const DeptPage = () => {
const [depts, setDepts] = useState([
{deptno:10,dname:"개발1팀",loc:"부산"},
{deptno:20,dname:"개발2팀",loc:"인천"},
{deptno:30,dname:"개발3팀",loc:"서울"}
]);//배열객체 를 쓰자
useEffect(() => {
        setDepts(depts)
    console.log(depts)
    
});//옵션에 별도의 값을 지정하지 않으면 최초 한번만 실행됨 
return (
    <>
      <Header/>

<div>부서관리페이지</div>
<div className="deptList">
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>부서번호</th>
          <th>부서명</th>
          <th>지역</th>
        </tr>
      </thead>
      <tbody>
      { Object.keys(depts).map((key) => (
       <DeptRow key={key}dept={depts[key]}/>
        ))}
      </tbody>
    </Table>    
</div>
      <Bottom/>
    </>
  )
}
export default DeptPage
