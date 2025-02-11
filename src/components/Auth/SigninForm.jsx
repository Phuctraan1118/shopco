import { Button, Stack, TextField, Typography, colors } from '@mui/material';
import React from 'react';
import { ScreenMode } from '../../pages/SigninPage';

const SigninForm = ({ onSwitchMode,onSignIn }) => {

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100%",
        color: colors.grey[800]
      }}
    >
      <Stack spacing={5} sx={{
        width: "100%",
        maxWidth: "500px"
      }}>
        <Stack>
          <Typography variant='h4' fontWeight={600} color={colors.grey[800]}>
            Đăng nhập
          </Typography>
          <Typography color={colors.grey[600]}>
            Chào mừng bạn trở lại!
          </Typography>
        </Stack>

        <Stack spacing={4}>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Typography color={colors.grey[800]}>Email</Typography>
              <TextField />
            </Stack>
            <Stack spacing={1}>
              <Typography color={colors.grey[800]}>Mật khẩu</Typography>
              <TextField type='password' />
            </Stack>
          </Stack>
          <Button
            variant='contained'
            size='large'
            onClick={onSignIn}
            sx={{
              bgcolor: colors.grey[800],
              "&:hover": {
                bgcolor: colors.grey[600]
              }
            }}
          >
            Đăng nhập
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography>Chưa có tài khoản?</Typography>
          <Typography
            onClick={() => onSwitchMode(ScreenMode.SIGN_UP)}
            fontWeight={600}
            sx={{
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            Đăng kí ngay
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SigninForm;