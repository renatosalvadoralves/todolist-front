import React, { useCallback, useState } from 'react';
import { Container, Flex, StyledButton } from './styles';
import { ReactComponent as Trash } from 'src/utils/icons/trash.svg';
import { ReactComponent as Edit } from 'src/utils/icons/pencil-edit-button.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/root-reducer';
import { Props } from '../utils';
import {
  REMOVE_PROJECT,
  SET_ERROR,
  SET_LOADING,
  UPDATE_PROJECT,
} from 'src/redux/project/project-types';
import { remove, update } from './utils';
import Input from 'src/components/input';

const Nav: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();

  const [canUpdate, setCanUpdate] = useState(false);
  const [newName, setNewName] = useState(null);

  const userId = useSelector((state: RootState) => state.user.data?._id);

  const handleUpdate = useCallback(async () => setCanUpdate(!canUpdate), [
    canUpdate,
  ]);

  const handleSubmitUpdate = useCallback(async () => {
    dispatch({ type: SET_LOADING, payload: true });
    setCanUpdate(!canUpdate);

    await update(data._id, userId, { name: newName })
      .then(() => {
        dispatch({ type: UPDATE_PROJECT, payload: { ...data, name: newName } });
        dispatch({ type: SET_ERROR, payload: false });
      })
      .catch(() => dispatch({ type: SET_ERROR, payload: true }));
    dispatch({ type: SET_LOADING, payload: false });
  }, [data._id, userId, canUpdate, newName]);

  const handleRemove = useCallback(async () => {
    dispatch({ type: SET_LOADING, payload: true });
    await remove(data._id, userId)
      .then(() => {
        dispatch({ type: REMOVE_PROJECT, payload: data });
        dispatch({ type: SET_ERROR, payload: false });
      })
      .catch(() => dispatch({ type: SET_ERROR, payload: true }));
    dispatch({ type: SET_LOADING, payload: false });
  }, [data._id, userId]);

  return (
    <Container>
      {canUpdate ? (
        <>
          <Input
            value={newName}
            name="name"
            onChange={(e) => setNewName(e.target.value)}
          />
          <StyledButton onClick={handleSubmitUpdate} />
        </>
      ) : (
        <div>{data?.name}</div>
      )}
      <Flex>
        <Edit onClick={handleUpdate} />
        <Trash onClick={handleRemove} />
      </Flex>
    </Container>
  );
};

export default Nav;
