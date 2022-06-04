import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Header } from 'ui/components/Header';
import { defaultTheme } from 'ui/themes/default';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<Header />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
