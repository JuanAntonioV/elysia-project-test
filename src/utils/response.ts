import { TResponse } from '../types';

export function responseFormater<TResponse>(
  data = null,
  code = 200,
  message = 'Success'
) {
  let res = {
    code,
    message,
    data,
  };

  return res;
}

export const okResponse = (props: any) =>
  responseFormater(props, 200, 'Success');
