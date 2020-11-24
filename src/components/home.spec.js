import { shallowMount } from '@vue/test-utils';
import HelloWorld from './hello-world';

describe('<home/>', () => {
    const wrapper = shallowMount(home);
    it('should render correct contents', () => {
      expect(wrapper.find('.hello h1').text())
        .toEqual('Welcome to Your');
        expect(wrapper.find('el-button').isVisible()).toBe(false);
    });
    test('getAxiosx 有且只 call 了一次', () => {
        expect(getAxiosx.mock.calls.length).toBe(1);
      });
      it('用户信息渲染正确', () => {
        expect(wrapper.find('.go').text()).toEqual('查看历史记录');
      
      });
  });