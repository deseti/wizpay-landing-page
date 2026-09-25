import LegalLayout from '../components/LegalLayout'

const sections = [
  {
    id: 'about', heading: 'About WizPay',
    content: <p>WizPay is a non-custodial stablecoin payment application operating primarily on Arc Mainnet. In these Terms, “WizPay,” “we,” “us,” and “our” refer to the service. These Terms cover the public website and the WizPay application.</p>,
  },
  {
    id: 'acceptance', heading: 'Acceptance of the Terms',
    content: <p>By accessing or using WizPay, you agree to these Terms. If you do not agree, do not use the service. Our <a href="/privacy">Privacy Policy</a> explains how information may be processed when you use WizPay.</p>,
  },
  {
    id: 'eligibility', heading: 'Eligibility',
    content: <p>You must be at least 18 and have the legal capacity and authority to use the service. If you act for an organization or another person, you must have authority to do so. Use WizPay only where your use is permitted by applicable law; availability of the interface does not establish that a transaction is lawful in your location.</p>,
  },
  {
    id: 'service', heading: 'Description of the Service',
    content: <p>WizPay provides software to prepare, route, display, verify, or facilitate stablecoin transactions and payment requests. Available capabilities include Send, Payroll, USDC/EURC Swap, Invoices, Payment Links, Circle CCTP V2 bridging, and Activity. Availability depends on the supported network, asset, transaction route, and third-party infrastructure.</p>,
  },
  {
    id: 'wallets', heading: 'Self-Custodial Wallets',
    content: <><p>You connect and control your own external, self-custodial wallet. You review and authorize or sign your own transactions, including token approvals. WizPay does not hold your private keys or take custody of your funds for production payment execution.</p><p>You are responsible for protecting your wallet, recovery phrase, devices, and approvals. Never send private keys or recovery phrases to WizPay. Disconnecting a wallet from an interface does not revoke existing on-chain approvals. WizPay cannot restore lost keys or guarantee recovery of funds.</p></>,
  },
  {
    id: 'networks', heading: 'Supported Networks and Digital Assets',
    content: <p>Arc Mainnet is the primary application network. WizPay’s public site identifies USDC and EURC and references WizPay Mainnet payroll and swap smart contracts. Supported external networks serve as USDC bridge sources or destinations through Circle CCTP V2. Network and asset support can change. Verify the selected network, token contract, recipient, and route before signing; similar token names do not establish compatibility.</p>,
  },
  {
    id: 'finality', heading: 'Transactions and Blockchain Finality',
    content: <><p>A signature or submitted transaction does not by itself establish successful settlement. Transactions can be delayed, rejected, reverted, or affected by network reorganizations. Activity displays may lag or be incomplete; check transaction receipts and relevant network confirmations.</p><p>Confirmed blockchain transactions generally cannot be reversed. WizPay cannot delete or alter records already committed to a public blockchain or unilaterally cancel a settled payment. Incorrect addresses, amounts, assets, or approvals can result in permanent loss. Any refund may require a separate transaction by the recipient.</p></>,
  },
  {
    id: 'payment-features', heading: 'Send, Payroll, Swap, Invoices, Payment Links, Bridge, and Activity',
    content: <ul>
      <li><strong>Send:</strong> Transfer supported stablecoins from your wallet. Verify the recipient, amount, and network.</li>
      <li><strong>Payroll:</strong> Prepare payments to multiple recipients, including supported same-token and atomic cross-token settlement flows. You are responsible for recipient data, payment authority, wages, withholding, reporting, and other obligations relevant to your payroll. WizPay does not act as your employer or payroll compliance adviser.</li>
      <li><strong>Swap:</strong> Exchange USDC and EURC through supported execution paths. Quotes can change or expire, and execution depends on liquidity, price limits, approvals, and network conditions. A displayed quote is not a guaranteed execution price.</li>
      <li><strong>Invoices and Payment Links:</strong> Create and share payment requests. You are responsible for their content and the underlying goods, services, or obligations. A request does not guarantee payment or establish the identity or trustworthiness of a payer or payee. WizPay does not resolve the underlying commercial dispute.</li>
      <li><strong>Bridge:</strong> Move USDC between Arc Mainnet and supported external networks using Circle CCTP V2. A bridge involves separate network and protocol steps; source-chain execution does not establish destination-chain completion. Delays or failures may require further action from your wallet, and completion or recovery is not guaranteed.</li>
      <li><strong>Activity:</strong> View payment and settlement information. Displays assist tracking but do not replace transaction verification, accounting records, or tax records.</li>
    </ul>,
  },
  {
    id: 'fees', heading: 'Fees and Network Costs',
    content: <p>Transactions may involve network costs, protocol fees, bridge costs, swap costs, or applicable WizPay fees. Review available fee information and wallet prompts before authorizing a transaction. Estimates can change, and network costs may be incurred even when execution fails. WizPay does not control third-party fees and cannot guarantee their refund.</p>,
  },
  {
    id: 'protocols', heading: 'Smart Contracts and Third-Party Protocols',
    content: <p>WizPay interacts with smart contracts and depends on services such as wallets, blockchain nodes, stablecoin issuers, liquidity protocols, and Circle CCTP V2. Those services may have separate terms and policies. Public contract references are provided for inspection, not as a guarantee of security or an endorsement by a third party. WizPay does not guarantee third-party performance, liquidity, stablecoin value, or blockchain availability.</p>,
  },
  {
    id: 'responsibilities', heading: 'User Responsibilities',
    content: <p>Check every transaction before signing, secure your wallet, maintain your own records, and comply with laws applicable to you and your transactions. Provide accurate information and share other people’s information only with appropriate authority. You are responsible for your commercial arrangements, tax obligations, and the permissions needed to make or request payments.</p>,
  },
  {
    id: 'prohibited', heading: 'Prohibited Uses',
    content: <p>Do not use WizPay for fraud, theft, money laundering, sanctions evasion, or other unlawful activity. Do not impersonate others, submit information without authorization, distribute malicious code, exploit vulnerabilities to harm others, disrupt the service, or bypass access or security restrictions. Do not use payment requests to deceive recipients or facilitate prohibited transactions.</p>,
  },
  {
    id: 'risks', heading: 'Digital Asset, Blockchain, Smart Contract, and Liquidity Risks',
    content: <p>Digital assets can lose value, including stablecoins losing their intended peg. Issuers may impose restrictions affecting transfers or redemption. Blockchain congestion, outages, forks, malicious activity, smart contract defects, compromised approvals, bridge failures, and insufficient liquidity can delay transactions or cause loss. Prices and available liquidity may change between a quote and execution. Regulatory changes can affect access or use. Use the service only if you understand these risks and can bear potential losses.</p>,
  },
  {
    id: 'no-custody', heading: 'No Custody / No Banking Relationship',
    content: <p>Using WizPay does not create a custodial or banking relationship with WizPay. WizPay does not hold user private keys or take custody of user funds for production payment execution. Assets in your wallet are not deposits with WizPay, and WizPay does not provide deposit insurance or guarantee balances, redemption, or recovery.</p>,
  },
  {
    id: 'no-advice', heading: 'No Investment, Legal, Tax, or Financial Advice',
    content: <p>WizPay’s interface and content are informational software tools, not investment, legal, tax, or financial advice. You decide whether a transaction is appropriate for you. Seek qualified independent advice when needed.</p>,
  },
  {
    id: 'availability', heading: 'Service Availability and Changes',
    content: <p>We may change, restrict, pause, or discontinue features or support for networks and assets. Maintenance, security events, and third-party disruptions may limit access. We do not promise uninterrupted availability or completion of any transaction. Changes to the interface do not reverse transactions already committed to a blockchain.</p>,
  },
  {
    id: 'intellectual-property', heading: 'Intellectual Property',
    content: <p>WizPay and its respective rights holders retain rights in the service’s branding, content, and software. You may use the interface for its intended purpose under these Terms. Any separately published open-source license governs the code it covers; these Terms do not override rights granted under that license. Third-party names and marks belong to their respective owners.</p>,
  },
  {
    id: 'disclaimers', heading: 'Disclaimers',
    content: <p>To the extent permitted by applicable law, WizPay is provided “as is” and “as available,” without warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the service is error-free, secure at all times, or suitable or lawful for every user or jurisdiction. We do not guarantee uptime, transaction completion, stablecoin value, liquidity, swap prices, or recovery of funds.</p>,
  },
  {
    id: 'liability', heading: 'Limitation of Liability',
    content: <p>To the extent permitted by applicable law, WizPay will not be liable for indirect, incidental, consequential, or special losses, including lost profits, opportunities, or data, arising from use of or inability to use the service. To that same extent, WizPay is not responsible for losses caused by incorrect transaction details, compromised user wallets, or failures of independent networks, issuers, or protocols outside our control. Nothing in these Terms excludes liability or limits rights that cannot lawfully be excluded or limited.</p>,
  },
  {
    id: 'termination', heading: 'Suspension or Termination',
    content: <p>You may stop using WizPay at any time. We may restrict or suspend access to the interface in response to misuse, security risks, legal requirements, or discontinuation of the service. Such restrictions do not give us control of your self-custodial wallet, revoke on-chain approvals, or erase blockchain records. Provisions that by their nature address past use, risks, intellectual property, and liability continue to apply after use ends.</p>,
  },
  {
    id: 'changes', heading: 'Changes to the Terms',
    content: <p>We may revise these Terms by posting an updated version with a revised “Last updated” date. Where required by applicable law, we will provide additional notice or seek agreement. Review the Terms periodically. Continued use after updated Terms take effect constitutes acceptance to the extent permitted by applicable law; if you disagree, stop using WizPay.</p>,
  },
]

export default function Terms() {
  return <LegalLayout title="Terms of Service" path="/terms" introduction="These Terms explain the conditions for using WizPay and the responsibilities and risks involved in authorizing stablecoin transactions from your own wallet." sections={sections} />
}
