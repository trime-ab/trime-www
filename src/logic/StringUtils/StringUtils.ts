class StringUtils {
  hasValue = (string: string): boolean => {
    return string !== undefined && string !== null && string !== '';
  };
}

const stringUtils = new StringUtils();
export default stringUtils;
