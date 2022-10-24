import type { NextPage } from 'next'
import React, { useEffect } from "react";
import Layout from '../layout/index'
import Head from 'next/head'
import { Sidebar } from '../components/index'
import List from '../components/List'

//test 
import { getTodos } from "../api/api";
import { ITodo } from "../store/types/jsonPlaceholder";
import { loadTodosCreator } from "../store/creators/todos";
import { useAppDispatch } from "../hooks/redux";

const Home: NextPage<{todos: ITodo[]}> = ({todos}) => {

  const dispatch = useAppDispatch()


  useEffect(() => {
     dispatch(loadTodosCreator(todos))
  }, [])



  return (
    <>
      <Head>
        <title>TODO aplication | 3dLook</title>
      </Head>

      <Layout>

        <Sidebar />

        <section className='flex flex-col lg:w-[66%] gap-7 w-full h-[90vh] items-center'>
          <div className='w-full flex flex-col gap-4 md:w-[100%]'>
            <List />
          </div>
        </section>

      </Layout>
    </>
  )
}

Home.getInitialProps = async () => {
  const data = await getTodos()
  return {
    todos: data,
  }
}


export default Home