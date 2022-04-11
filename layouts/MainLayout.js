import { Header } from '@/components/Header/Header.component';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';

export const MainLayout = ({ children, meta = {} }) => {
  return (
    <>
      <Head>
        <title>{meta.title} | Guacamaya Social Media</title>
        <meta
          name="description"
          content={meta.description || 'Guacamaya social media'}
        />
        <link rel="icon" href="/favicon.ico" />
      <div id="fb-root"></div>
      {

process.env.NODE_ENV === 'production' && (
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v8.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/es_ES/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

        <div class="fb-customerchat"
            attribution=setup_tool
            page_id="426177901494317"
            theme_color="#ff5ca1"
            logged_in_greeting="Hola! podemos ayudarte en algo?"
            logged_out_greeting="Hola! podemos ayudarte en algo?">
        </div>
          `
        }}
      />
)
      }
      </Head>
      <Header />
      <Box
        minH="100vh"
      >
        {children}
      </Box>
      <Header />
    </>
  );
};
