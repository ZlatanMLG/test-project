import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

function SnackbarCloseButton({ snackbarKey }) {
  const { closeSnackbar } = useSnackbar();
  return (
    <button
      type="button"
      onClick={() => closeSnackbar(snackbarKey)}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        color: 'pink',
        fontSize: '18px',
        paddingRight: '8px',
        cursor: 'pointer'
      }}
    >
      X
    </button>
  );
}

SnackbarCloseButton.propTypes = {
  snackbarKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default SnackbarCloseButton;