# 리액트 Hook : useMemo
리액트를 사용하면서 useState와 useEffect를 자주 사용해보았지만,<br>
useMemo는 생소했습니다.<br>
같은 값을 반복해서 반환하는 경우 캐싱하여 메모리에 저장하고<br>
렌더링을 최적화 하는 방법으로 useMemo를 소개합니다.<br>
<br>
<br>
<br>
아래의 코드를 확인해보면 useState로 색을 관리하고, 스위치의 값을 관리합니다.<br>
그리고 useEffect로 객체값을 의존성 배열에 넣어 감시합니다.<br>
그리고 객체값이 바뀌면 해당하는 함수가 실행됩니다.<br>
<img width="800" alt="스크린샷 2023-12-05 오후 12 29 48" src="https://github.com/HOOOO98/React-useMemo/assets/120024673/c726e4ab-2a5c-4bea-9de3-ee30bbb69f46">
<br>
<br>
<br>
<br>
하지만 실제로 코드를 실행해서 실험을 해본다면 예상과는 다른 결과가 나옵니다.<br>
그 이유는 자바스크립트의 원시타입과 객체 타입의 차이에서 비롯되는데요.<br>
원시타입은 저장소 그 자체에 데이터를 저장하는 반면<br>
객체타입은 객체 데이터를 저장하는 저장소가 따로 있으며, 그 저장소의 주소를 저장합니다.<br>
예를 들어, 큰 건물을 데이터 자체로 저장하기 보다는 그 건물의 주소를 저장한다는 의미입니다.<br>
![ezgif-2-fbe9905b0d](https://github.com/HOOOO98/React-useMemo/assets/120024673/6453bc0b-21f3-4f70-bd93-20c7b197a253)
<br>
분명 의존성 배열에 `isOnOff`만 넣었는데<br>
색을 바꿔도 콘솔이 출력됩니다.<br>
그 이유는 이전에 설명한 바와 같이<br>
객체가 저장된 저장소의 비교가 아닌 주소의 비교이기 때문에 다를 수 밖에 없습니다.<br>
따라서 useEffect가 의존성 배열을 비교하고 렌더링이 계속 됩니다.<br>
<br>
<br>
<br>
<br>
다시 VScode로 돌아와서 객체 부분에 커서를 올려두면 툴팁이 나타납니다.<br>
useEffect로는 객체 비교해도 소용없으니 useMemo를 사용하라는 의미입니다.<br>
<img width="800" alt="스크린샷 2023-12-05 오후 12 32 52" src="https://github.com/HOOOO98/React-useMemo/assets/120024673/52689b70-69e3-4b43-9a26-ba6d1e0918fe">
<br>
<br>
<br>
<br>
그렇게 다시 useMemo를 사용하여 수정해보면,<br>
아래와 같이 원하는 방식대로 동작하는 것을 볼 수 있습니다.<br>
![ezgif-2-4736ae7675](https://github.com/HOOOO98/React-useMemo/assets/120024673/df45d498-cf95-4a84-8eec-f66259f7347d)
