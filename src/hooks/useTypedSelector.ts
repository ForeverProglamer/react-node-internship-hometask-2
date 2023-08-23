import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/Store';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
