import LegalLayout from '../components/LegalLayout'

const sections = [
  {
    id: 'scope', heading: 'Scope',
    content: <p>This policy describes information processing associated with the WizPay public website and non-custodial payment application. The information involved depends on the features you use. Independent wallets, blockchain networks, protocols, and linked services have their own practices and policies.</p>,
  },
  {
    id: 'information', heading: 'Information We Process',
    content: <p>Using WizPay may involve wallet addresses, transaction hashes, payment instructions, payroll recipient data, invoice and payment-link details, support communications, and technical request metadata. Some information comes from you, some from your browser or connected wallet, and some from public blockchain records or infrastructure providers. Self-custody does not mean that no information is processed.</p>,
  },
  {
    id: 'wallet-information', heading: 'Wallet and Blockchain Information',
    content: <p>When you use wallet-connected features, WizPay may process your public wallet address, selected network, token and balance information, transaction instructions, approvals, transaction hashes, and settlement status. Public addresses can be linked to people through payment details or other available information; they should not be treated as anonymous. You control transaction signing. WizPay does not hold your private keys, and you should never provide private keys or recovery phrases to us.</p>,
  },
  {
    id: 'provided-information', heading: 'Information Users Provide',
    content: <p>You may provide recipient addresses, amounts, asset selections, payroll details, invoice descriptions or references, payment-link information, and contact details or messages when requesting support. Information you place in a shared payment request may be visible to people who receive or access it. Provide only what is needed and ensure you have authority to share other people’s information. Avoid including sensitive personal information in payment descriptions or public transaction data.</p>,
  },
  {
    id: 'technical-information', heading: 'Technical / Usage Information',
    content: <p>Accessing the website or application sends requests to hosting and other infrastructure. These requests may expose IP addresses, browser and device details, requested URLs, referral information, timestamps, and error or diagnostic information to the systems handling them. The landing page loads fonts from Google Fonts, which receives request metadata when your browser requests those resources.</p>,
  },
  {
    id: 'uses', heading: 'How Information Is Used',
    content: <p>Information may be used to provide requested payment features, prepare or route transactions, verify settlement, display Activity, manage payment requests, respond to support inquiries, investigate errors or abuse, and maintain service operation and security. We may also process information to meet applicable legal obligations or address disputes. The information needed varies by feature; viewing the public legal pages does not require a wallet connection or authentication.</p>,
  },
  {
    id: 'sharing', heading: 'How Information May Be Shared',
    content: <><p>Information may be transmitted to infrastructure providers that handle hosting, requests, blockchain access, or support; to wallets and protocols needed for the actions you request; and to intended payment recipients or people with whom you share invoices and payment links. Broadcasting a transaction makes its on-chain contents available to the relevant network and potentially to anyone viewing it.</p><p>We may disclose relevant information when reasonably necessary to comply with applicable legal requirements, respond to valid legal requests, protect users or service security, or establish or defend legal claims. Third parties receiving information may process it under their own policies and obligations.</p></>,
  },
  {
    id: 'public-records', heading: 'Blockchain Networks and Public Records',
    content: <><p>Arc Mainnet and supported external blockchain networks can make addresses, amounts, token transfers, contract interactions, and transaction histories publicly accessible. Explorers, indexers, and other parties may copy, analyze, and retain these records independently of WizPay.</p><p>Public blockchain information is outside WizPay’s exclusive control and may remain publicly accessible permanently. WizPay cannot delete or alter records already committed to a public blockchain. Deleting information from a WizPay-controlled system, where possible, does not remove on-chain records or copies held by independent parties.</p></>,
  },
  {
    id: 'third-parties', heading: 'Third-Party Services and Infrastructure',
    content: <p>WizPay relies on or connects to services such as hosting infrastructure, external wallets, blockchain RPC providers, explorers, liquidity protocols, and Circle CCTP V2 for supported USDC bridging. The public site also requests Google Fonts resources and links to external websites. Depending on your use, providers may receive technical metadata, wallet addresses, or transaction details. Review the relevant provider’s privacy policy and wallet permissions before using its services; this policy does not govern independent third parties.</p>,
  },
  {
    id: 'storage', heading: 'Cookies / Local Storage',
    content: <p>The current public landing-page code does not set cookies or use local storage or session storage, and does not include a visitor analytics tracking script. That does not prevent hosting or font providers from receiving request metadata. The connected application, your wallet, or third-party services may use browser storage for connection state, preferences, or their own functionality as applicable. You can manage cookies and site storage in your browser and connections in your wallet. Clearing browser storage or disconnecting does not delete blockchain records or revoke on-chain approvals.</p>,
  },
  {
    id: 'retention', heading: 'Data Retention',
    content: <p>Information in systems we control is retained for as long as needed for the purpose for which it is processed, including operating requested features, support, security, resolving disputes, and applicable legal obligations. Retention depends on the type of information and context; there is no single retention period for all data. Independent providers apply their own retention practices. Public blockchain records may persist permanently, regardless of whether you stop using WizPay.</p>,
  },
  {
    id: 'security', heading: 'Security',
    content: <p>No website, network, storage system, or security measure can guarantee complete protection. Non-custodial execution leaves you responsible for your wallet credentials, devices, and transaction approvals. Do not send secrets or unnecessary sensitive information in support messages. Contact us if you believe information associated with WizPay has been exposed or misused.</p>,
  },
  {
    id: 'international', heading: 'International Processing',
    content: <p>Internet infrastructure, service providers, and blockchain participants may process information in countries other than your own, where privacy protections may differ. Public blockchain distribution is not confined to a single location and is outside WizPay’s exclusive control. Where applicable law requires safeguards for transfers of information we control, those requirements apply. This policy does not promise that all information stays within a particular country.</p>,
  },
  {
    id: 'choices', heading: 'Privacy Choices and Rights',
    content: <><p>You can choose whether to connect a wallet, submit a transaction, share a payment request, or provide optional information. Manage browser storage and wallet permissions through their respective settings. Limit personal information in public or shared fields.</p><p>Depending on applicable law, you may have rights to request access, correction, deletion, restriction, or portability of personal information, object to certain processing, or withdraw consent where processing relies on it. You may also have a right to complain to an appropriate data protection authority. Contact <a href="mailto:connect@wizpay.xyz">connect@wizpay.xyz</a> to make a request. We may need proportionate information to verify your authority; never send your private key or recovery phrase. Requests are subject to applicable law and legitimate retention requirements. We cannot erase public blockchain records or control independent parties’ copies.</p></>,
  },
  {
    id: 'children', heading: 'Children’s Privacy',
    content: <p>WizPay is intended for people aged 18 or older and is not directed to children. If you believe a child has provided personal information to WizPay, contact us so we can review the situation and address information in systems we control as appropriate. Public blockchain records remain subject to the limitations described above.</p>,
  },
  {
    id: 'changes', heading: 'Changes to the Policy',
    content: <p>We may update this policy as the service or information practices change. We will publish the revised policy here and update the “Last updated” date. Where applicable law requires additional notice or consent, those requirements apply. Review this page periodically for the current policy.</p>,
  },
]

export default function Privacy() {
  return <LegalLayout title="Privacy Policy" path="/privacy" introduction="This policy explains the information that use of WizPay may involve, how it may be used or shared, and the privacy limits of public blockchain transactions." sections={sections} />
}
