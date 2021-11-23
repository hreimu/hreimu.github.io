import {LeftMenu} from './leftMenu'
import {Layout} from "antd";
import {initalState} from "@/pages/state";
import {useReducer, createContext, useMemo} from "react";
import {reducer} from './reducer'
import {Directory} from "@/pages/mainArticle/directory";
import {Home} from "@/pages/home";
import './mainArticle/index.less'
import {PushType} from './types'
import {Main} from "@/pages/mainArticle";
import {Move} from "@/pages/component/move";

const {Sider, Content} = Layout

export const Context = createContext<{ state?: PushType; dispatch?: any }>({})

export default function IndexPage() {
  const [state, dispatch] = useReducer(reducer, initalState)

  const renderComponent = useMemo(
    () => () => {
      switch (state?.path) {
        case 'react':
          return <Directory/>
        case 'article':
          return <Main/>
        default:
          return <Home/>
      }
    }, [state])

  return (
    <Context.Provider value={{state, dispatch}}>
      <Layout>
        <Sider width={100}>
          <LeftMenu/>
        </Sider>
        <Content>
          {renderComponent()}
        </Content>
      </Layout>
      <Move/>
    </Context.Provider>
  );
}
