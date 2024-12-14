import Primary from "@/components/buttons/Primary";
import Page from "@/components/layouts/Page";
import Cap from "@/components/typography/Cap";
import Heading from "@/components/typography/Heading";
import Head from "next/head";
import styles from "./resume.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Danny's IO | Resume</title>
        <meta
          name="description"
          content="Download Daniel (Danny) Joffe's Web Developer resume."
        />
      </Head>
      <Page>
        <div className={styles.experience}>
          <Heading>Resume</Heading>

          <Cap>
            <Primary
              as="link"
              href="https://docs.google.com/document/u/1/export?format=pdf&id=1HFm9DunwWoHGqJKxZTxb_HpoaxztjfFPLAbJRiHr-JE"
            >
              Download
            </Primary>
          </Cap>
        </div>

        <div className={styles.resumeContainer}>
          {/* https://support.google.com/docs/answer/183965#embed_files&zippy=%2Cembed-a-document-spreadsheet-or-presentation */}
          <iframe
            title="Daniel Joffe most updated resume."
            className={styles.resumeEmbed}
            width={400}
            height={500}
            loading="lazy"
            src="https://docs.google.com/document/d/e/2PACX-1vTnWb3WW_IcwBOlJnbF7kOV2xNQaa44c8QU-xW10LgmcIpnMbbD1f5kHm3KfbJ-B9Gzd4yu-MvXLaE6/pub?embedded=true"
            seamless
          ></iframe>
        </div>
      </Page>
    </>
  );
}
