- 리덕스 설치
npm i redux react-redux redux-thunk redux-devtools-extension
  
- store.js 생성 
- 필요한 라이브러리 작성

- App.js 내부에 Provider, store import
- Provider 로 전체 감싸기

- reducers 파일 생성
- 내부에 index.js 생성

- 환자 객체 post로 생성 --> db.json에 "patients":{} 만들지 않고, 곧바로 fetch 가능할까?

(병원 개인정보동의서 발급 기능 => 발급된 서류는 어떻게 저장할 것인)

-

#### State is immutable, that's the rule of redux.
Mutaion in state is not recommended.

Instead mutating the state, just return another object. for example using filter method in array state is a. good method to delete some elements in array. Because filter() method just return a new state(array) instead mutate a state.



#### Redux is just a function. 
Dispatching actions, and modifying the data(states) through the actions.

it is good to separate functions as its minimum responsiblity, dispatchors should only perform dispatching actions, and those actions will get an action type and data(payload).

So that the reducers will change the state(data) and we can use those updated data through the 'getState() method'.



In Redux Middleware, Reducer is the only place that states of data modified, so that it is easy to handle the data and states.

If we don't use Redux, all data and states are handled in the component level which will occur big difficulty in controlling data because the states will be separated in all of components.

