import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddProject from 'src/components/add-project-card/AddProjectCard';
import Layout from 'src/components/layout';
import Loading from 'src/components/loading';
import ProjectCard from 'src/components/project-card';
import { RootState } from 'src/redux/root-reducer';
import {
  SET_ERROR,
  SET_LOADING,
  SET_PROJECT,
} from 'src/redux/project/project-types';
import {
  SET_ERROR as SET_TASK_ERROR,
  SET_LOADING as SET_TASK_LOADING,
  SET_TASK,
} from 'src/redux/task/task-types';
import { Container } from './styles';
import { getProjects, getTasks, IData } from './utils';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(null);
  const userId = useSelector((state: RootState) => state.user.data?._id);
  const { data, loading } = useSelector((state: RootState) => state.project);

  async function setProjects() {
    dispatch({ type: SET_LOADING, payload: true });
    await getProjects(userId)
      .then((res) => {
        dispatch({ type: SET_PROJECT, payload: res.data });
        dispatch({ type: SET_ERROR, payload: false });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: true }));
    dispatch({ type: SET_LOADING, payload: false });
  }

  async function setTasks() {
    dispatch({ type: SET_TASK_LOADING, payload: true });
    await getTasks(userId)
      .then((res) => {
        dispatch({ type: SET_TASK, payload: res.data?.tasks });
        dispatch({ type: SET_TASK_ERROR, payload: false });
      })
      .catch((err) => {
        console.log(err, 'err');
        dispatch({ type: SET_TASK_ERROR, payload: true });
      });
    dispatch({ type: SET_TASK_LOADING, payload: false });
  }

  const renderProjects = useMemo(
    () => data?.map((value, key) => <ProjectCard key={key} data={value} />),
    [data],
  );

  useEffect(() => {
    setTasks();
    setProjects();
  }, []);

  return (
    <Layout>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            {renderProjects}
            <AddProject />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
