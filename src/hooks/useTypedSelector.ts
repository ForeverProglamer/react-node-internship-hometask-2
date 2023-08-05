import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
